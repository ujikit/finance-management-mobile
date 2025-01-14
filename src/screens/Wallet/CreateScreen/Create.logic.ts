import {useState} from 'react';
import {shallowEqual, useDispatch} from 'react-redux';

import {createWalletListDispatch} from '../../../redux/actions';

import {CreateScreenProps} from './Create.types';
import {useAppSelector} from '../../../redux/hook';

const CreateLogic = (props: CreateScreenProps) => {
  const dispatch = useDispatch();

  const {navigation} = props;

  const global = useAppSelector(state => state.global, shallowEqual);

  const {walletList} = global;

  const initForm = {
    WalletCreate: {
      form: {
        name: {
          title: 'Wallet Name',
          value: '',
          placeholder: 'Input wallet name',
        },
        balance: {
          title: 'Balance',
          value: '',
          placeholder: 'Input balance',
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

  const _handleAddTransaction = _form => {
    const data = {
      id: new Date().getTime(),
      name: _form.WalletCreate.form.name.value,
      total: parseInt(_form.WalletCreate.form.balance.value, 10),
      isSelected: false,
    };

    const params = {
      data,
      walletList,
      navigation,
    };
    dispatch(createWalletListDispatch(params) as any);
  };

  return {
    actions: {setForm, _handleInput},
    data: {form},
  };
};

export default CreateLogic;
