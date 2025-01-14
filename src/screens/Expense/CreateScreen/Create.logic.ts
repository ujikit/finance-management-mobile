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

  const {transactionList, walletList} = global;

  const dispatch = useDispatch();

  const initForm = {
    Transactionreate: {
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
        Transactionreate: {
          ..._prevState.Transactionreate,
          form: {
            ..._prevState.Transactionreate.form,
            [type]: {
              ..._prevState.Transactionreate.form[type],
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
      name: _form.Transactionreate.form.name.value,
      total: parseInt(_form.Transactionreate.form.balance.value, 10),
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
    data: {form, selectedWallet},
  };
};

export default CreateLogic;
