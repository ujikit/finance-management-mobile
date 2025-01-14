import {shallowEqual, useDispatch} from 'react-redux';

import {useAppSelector} from '../../../redux/hook';

import {ListScreenProps} from './List.types';
import {useMemo} from 'react';
import {selectWalletDispatch} from '../../../redux/actions';

const ListLogic = (props: ListScreenProps) => {
  const dispatch = useDispatch();

  const global = useAppSelector(state => state.global, shallowEqual);

  const {walletList} = global;

  const selectedWallet = useMemo(() => {
    return walletList?.filter(item => item.isSelected)[0];
  }, [walletList]);

  const _handleSelectWallet = walletId => {
    const params = {
      walletId,
      walletList,
      selectedWallet,
    };
    dispatch(selectWalletDispatch(params) as any);
  };

  return {
    actions: {_handleSelectWallet},
    data: {walletList, selectedWallet},
  };
};

export default ListLogic;
