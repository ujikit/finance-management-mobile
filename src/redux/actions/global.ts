import {Dispatch} from 'react';

import {IGlobal} from '../types/global';
import {STORAGE} from '../../helpers';
import {STORAGE_KEY} from '../../constants';

export type UPDATE_TRANSACTION_LIST = 'UPDATE_TRANSACTION_LIST';

export const loaderDispatch = (data: any) => (dispatch: Dispatch<IGlobal>) => {
  dispatch({type: 'LOADER', payload: data});
};

export const createTransactionDispatch =
  params => async (dispatch: Dispatch<IGlobal>) => {
    await STORAGE.AsyncStorage.Set(STORAGE_KEY.TRANSACTION_LIST, [
      params.data,
      ...params.transactionList,
    ])
      .then(() => {
        dispatch({
          type: 'CREATE_TRANSACTION',
          payload: [params.data, ...params.transactionList],
        });

        params.navigation.goBack();
      })
      .catch(error => {
        console.log('error_createTransactionDispatch', JSON.stringify(error));
      });
  };

export const updateTransactionListDispatch =
  (data: any) => (dispatch: Dispatch<IGlobal>) => {
    dispatch({type: 'UPDATE_TRANSACTION_LIST', payload: data});
  };

export const updateWalletListDispatch =
  (data: any) => (dispatch: Dispatch<IGlobal>) => {
    dispatch({type: 'UPDATE_WALLET_LIST', payload: data});
  };
