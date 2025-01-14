import {useMemo, useState} from 'react';
import {shallowEqual, useDispatch} from 'react-redux';

import {useAppSelector} from '../../../redux/hook';

import {CreateScreenProps} from './Create.types';
import {createTransactionDispatch} from '../../../redux/actions';

const CreateLogic = (props: CreateScreenProps) => {
  const {navigation} = props;

  const global = useAppSelector(state => state.global, shallowEqual);

  const {transactionList, walletList} = global;

  const dispatch = useDispatch();

  const initForm = {
    WalletCreate: {
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
        WalletCreate: {
          ..._prevState.WalletCreate,
          form: {
            ..._prevState.WalletCreate.form,
            [type]: {
              ..._prevState.WalletCreate.form[type],
              value,
            },
          },
        },
      };
    });
  };

  const selectedWallet = useMemo(() => {
    return walletList.filter(item => item.isSelected)[0];
  }, [walletList]);

  const _handleAddTransaction = _form => {
    const data = {
      name: _form.WalletCreate.form.name.value,
      total: parseInt(_form.WalletCreate.form.balance.value, 10),
      type: 'out',
      wallet: {
        id: selectedWallet.id,
      },
    };

    const params = {
      data,
      transactionList,
      navigation,
    };
    dispatch(createTransactionDispatch(params) as any);
  };

  return {
    actions: {setForm, _handleInput},
    data: {form, selectedWallet},
  };
};

export default CreateLogic;
