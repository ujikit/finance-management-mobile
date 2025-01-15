import {useMemo, useState} from 'react';
import {shallowEqual, useDispatch} from 'react-redux';

import {useAppSelector} from '../../../redux/hook';

import {CreateScreenProps} from './Create.types';
import {
  createTransactionDispatch,
  loaderDispatch,
} from '../../../redux/actions';

const CreateLogic = (props: CreateScreenProps) => {
  const {navigation} = props;

  const global = useAppSelector(state => state.global, shallowEqual);

  const {transactionList, walletList, transactionCategory} = global;

  const dispatch = useDispatch();

  const selectedTransactionCategory = useMemo(() => {
    return transactionCategory?.filter(item => item.isSelected)[0];
  }, [transactionCategory]);

  const initForm = {
    TransactionCreate: {
      form: {
        name: {
          title: 'Spending Name',
          value: '',
          placeholder: 'Input spending name',
        },
        balance: {
          title: 'Price',
          value: '',
          placeholder: 'Input price',
        },
        transactionCategory: {
          title: 'Choose Transaction Category',
          value: selectedTransactionCategory.name,
          placeholder: 'Input description',
          button: {
            onPress: () => navigation.navigate('ListDataScreen'),
          },
        },
        description: {
          title: 'Description',
          value: '',
          placeholder: 'Input description',
        },
      },
      button: {
        login: {
          title: 'Save',
          actions: form => _handleAddTransaction(form),
        },
      },
    },
  };

  const [form, setForm] = useState(initForm);

  const _handleInput = (type, value) => {
    setForm(_prevState => {
      return {
        ..._prevState,
        TransactionCreate: {
          ..._prevState.TransactionCreate,
          form: {
            ..._prevState.TransactionCreate.form,
            [type]: {
              ..._prevState.TransactionCreate.form[type],
              value,
            },
          },
        },
      };
    });
  };

  const selectedWallet = useMemo(() => {
    return walletList?.filter(item => item.isSelected)[0];
  }, [walletList]);

  const _handleAddTransaction = _form => {
    if (!!selectedWallet === false) {
      dispatch(loaderDispatch(true) as any);
      navigation.goBack();
      setTimeout(() => {
        navigation.navigate('WalletListScreen');
        dispatch(loaderDispatch(false) as any);
      }, 1000);
      setTimeout(() => {
        alert('Select Wallet first.');
      }, 2000);

      return;
    }

    const data = {
      name: _form.TransactionCreate.form.name.value,
      total: parseInt(_form.TransactionCreate.form.balance.value, 10),
      transactionCategory: selectedTransactionCategory.id,
      description: _form.TransactionCreate.form.description.value,
      type: 'out',
      wallet: {
        id: selectedWallet?.id,
      },
    };

    const params = {
      data,
      navigation,
      selectedWallet,
      walletList,
      transactionList,
    };
    dispatch(createTransactionDispatch(params) as any);
  };

  return {
    actions: {setForm, _handleInput},
    data: {form, selectedWallet, selectedTransactionCategory},
  };
};

export default CreateLogic;
