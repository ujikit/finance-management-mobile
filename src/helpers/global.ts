import {shallowEqual} from 'react-redux';
import {STORAGE} from '.';
import {STORAGE_KEY} from '../constants';

import {useAppSelector} from '../redux/hook';

const WalletParser = async walletId => {
  const walletList: any[] = JSON.parse(
    await STORAGE.AsyncStorage.Get(STORAGE_KEY.WALLET_LIST),
  );

  return JSON.stringify(walletList?.filter(item => item.id === walletId)[0]);
};

export {WalletParser};
