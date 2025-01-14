import {shallowEqual} from 'react-redux';

import {STORAGE} from '../../helpers';
import {STORAGE_KEY} from '../../constants';
import {useAppSelector} from '../../redux/hook';

import {HomeScreenProps} from './Home.types';
import {useMemo} from 'react';

const HomeLogic = (props: HomeScreenProps) => {
  const global = useAppSelector(state => state.global, shallowEqual);

  const {transactionList, walletList} = global;

  const _handleCalculateCurrentExpense = (transactionType, walletId) => {
    return transactionList?.reduce((acc, item) => {
      return item.type === transactionType && item.wallet.id === walletId
        ? acc + item.total
        : acc;
    }, 0);
  };

  const globalWallet = useMemo(() => {
    const inData = transactionList?.reduce((acc, item) => {
      return item.type === 'in' ? acc + item.total : acc;
    }, 0);

    const outData = transactionList?.reduce((acc, item) => {
      return item.type === 'out' ? acc + item.total : acc;
    }, 0);

    return {
      in: inData,
      out: outData,
    };
  }, [transactionList]);

  const selectedWallet = useMemo(() => {
    return walletList?.filter(item => item.isSelected)[0];
  }, [walletList]);

  const _handleWalletParser = walletId => {
    return walletList?.filter(item => item.id === walletId)[0];
  };

  return {
    actions: {_handleCalculateCurrentExpense, _handleWalletParser},
    data: {transactionList, globalWallet, selectedWallet},
  };
};

export default HomeLogic;
