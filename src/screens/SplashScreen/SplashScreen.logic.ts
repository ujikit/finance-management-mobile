//package import here
import {useCallback, useEffect} from 'react';

//local import here
import {STORAGE} from '../../helpers';
import {STORAGE_KEY} from '../../constants';

import {SplashScreenProps} from './SplashScreen.types';
import {useDispatch} from 'react-redux';
import {
  updateTransactionListDispatch,
  updateWalletListDispatch,
} from '../../redux/actions';

const SplashScreenLogic = (props: SplashScreenProps) => {
  //package value here
  const {navigation} = props;

  const dispatch = useDispatch();

  //place your function in here
  const _handleRedirectOnBoarding = useCallback(async () => {
    const transactionList = await STORAGE.AsyncStorage.Get(
      STORAGE_KEY.TRANSACTION_LIST,
    );

    const walletList = await STORAGE.AsyncStorage.Get(STORAGE_KEY.WALLET_LIST);

    dispatch(updateTransactionListDispatch(JSON.parse(transactionList)) as any);
    dispatch(updateWalletListDispatch(JSON.parse(walletList)) as any);

    navigation.reset({
      index: 0,
      routes: [{name: 'HomeScreen'}],
    });
  }, [navigation]);

  const _handleInit = useCallback(() => {
    // dispatch(getCurrentUserLocationDispatch());
    setTimeout(() => {
      _handleRedirectOnBoarding();
    }, 2000);
  }, [_handleRedirectOnBoarding]);

  useEffect((): any => {
    _handleInit();
  }, [_handleInit]);

  return {
    data: {},
    actions: {_handleInit, _handleRedirectOnBoarding},
  };
};

export default SplashScreenLogic;
