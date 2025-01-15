import {shallowEqual} from 'react-redux';

import {useAppSelector} from '../../redux/hook';

import {HomeScreenProps} from './Home.types';
import {useMemo, useState} from 'react';

const HomeLogic = (props: HomeScreenProps) => {
  const global = useAppSelector(state => state.global, shallowEqual);

  const {transactionList, walletList} = global;

  const [form, setForm] = useState({
    SearchData: {
      form: {
        description: {
          value: '',
        },
      },
    },
  });

  const filteredTransactionList = useMemo(() => {
    if (form.SearchData.form.description.value) {
      return transactionList.filter(
        item =>
          item.description?.match(
            new RegExp(form.SearchData.form.description.value, 'gi'),
          ) ||
          item.name?.match(
            new RegExp(form.SearchData.form.description.value, 'gi'),
          ),
      );
    } else {
      return transactionList;
    }
  }, [form.SearchData.form.description.value, transactionList]);

  const _handleCalculateCurrentExpense = (transactionType, walletId) => {
    return transactionList?.reduce((acc, item) => {
      return item.type === transactionType && item.wallet.id === walletId
        ? acc + item.total
        : acc;
    }, 0);
  };

  const _handleInput = value => {
    setForm(_prevState => {
      return {
        ..._prevState,
        SearchData: {
          ..._prevState.SearchData,
          form: {
            ..._prevState.SearchData.form,
            description: {
              ..._prevState.SearchData.form.description,
              value,
            },
          },
        },
      };
    });
  };

  const globalWallet = useMemo(() => {
    const inData = walletList?.reduce((acc, item) => {
      return acc + item.total;
    }, 0);

    const outData = transactionList?.reduce((acc, item) => {
      return item.type === 'out' ? acc + item.total : acc;
    }, 0);

    return {
      in: inData,
      out: outData,
    };
  }, [transactionList, walletList]);

  const selectedWallet = useMemo(() => {
    return walletList?.filter(item => item.isSelected)[0];
  }, [walletList]);

  const _handleWalletParser = walletId => {
    return walletList?.filter(item => item.id === walletId)[0];
  };

  return {
    actions: {
      _handleCalculateCurrentExpense,
      _handleWalletParser,
      _handleInput,
    },
    data: {
      form,
      filteredTransactionList,
      transactionList,
      globalWallet,
      selectedWallet,
    },
  };
};

export default HomeLogic;
