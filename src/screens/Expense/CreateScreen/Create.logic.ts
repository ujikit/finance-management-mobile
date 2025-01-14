import { useState } from 'react';

import { CreateScreenProps } from './Create.types';

const CreateLogic = (props: CreateScreenProps) => {
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
          actions: (form) => alert('tes'),
        },
      },
    },
  };

  const [form, setForm] = useState(initForm);

  const _handleInput = (type, value) => {
    setForm((_prevState) => {
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

  return {
    actions: { setForm, _handleInput },
    data: { form },
  };
};

export default CreateLogic;
