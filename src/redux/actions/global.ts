import {Dispatch} from 'react';

import {STORAGE} from '../../helpers';
import {IGlobal} from '../types/global';
import {STORAGE_KEY} from '../../constants';

export type UPDATE_TRANSACTION_LIST = 'UPDATE_TRANSACTION_LIST';

export const loaderDispatch = (data: any) => (dispatch: Dispatch<IGlobal>) => {
  dispatch({type: 'LOADER', payload: data});
};

export const createTransactionDispatch =
  params => async (dispatch: Dispatch<IGlobal>) => {
    const deductingBalanceOfCurrentWalletList = async () => {
      const deductedBalance = params.selectedWallet?.total - params.data.total;

      if (deductedBalance < 0) {
        alert('Insufficient Balance.');
        return false;
      }

      const walletListUpdated = params.walletList.map(item => {
        if (item.id === params.selectedWallet?.id) {
          return {
            ...item,
            total: deductedBalance,
          };
        } else {
          return item;
        }
      });

      await STORAGE.AsyncStorage.Set(
        STORAGE_KEY.WALLET_LIST,
        walletListUpdated,
      );

      dispatch({
        type: 'UPDATE_WALLET_LIST',
        payload: walletListUpdated,
      });

      return true;
    };

    const updatingTransactionList = async () => {
      const updatedTransactionList = [params.data, ...params.transactionList];

      await STORAGE.AsyncStorage.Set(
        STORAGE_KEY.TRANSACTION_LIST,
        updatedTransactionList,
      );

      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: updatedTransactionList,
      });
    };

    try {
      const response = await deductingBalanceOfCurrentWalletList();
      if (response === true) {
        await updatingTransactionList();
        params.navigation.goBack();
      }
    } catch (error) {
      console.error('error_createTransactionDispatch', error);
    }
  };

export const updateTransactionListDispatch =
  (data: any) => (dispatch: Dispatch<IGlobal>) => {
    dispatch({type: 'UPDATE_TRANSACTION_LIST', payload: data});
  };

export const createWalletListDispatch =
  (params: any) => async (dispatch: Dispatch<IGlobal>) => {
    try {
      let walletListUpdated = [];
      if (!!params.walletList === true) {
        walletListUpdated = [params.data, ...params.walletList];
      } else {
        walletListUpdated = [params.data];
      }

      dispatch({
        type: 'UPDATE_WALLET_LIST',
        payload: walletListUpdated,
      });

      await STORAGE.AsyncStorage.Set(
        STORAGE_KEY.WALLET_LIST,
        walletListUpdated,
      );

      params.navigation.goBack();
    } catch (error) {
      alert(error.message);
      console.log('error_createWalletListDispatch', error);
    }
  };

export const updateWalletListDispatch =
  (data: any) => (dispatch: Dispatch<IGlobal>) => {
    dispatch({type: 'UPDATE_WALLET_LIST', payload: data});
  };

export const selectWalletDispatch =
  (params: any) => (dispatch: Dispatch<IGlobal>) => {
    const data = params.walletList.map(item => {
      if (item.id === params.walletId) {
        return {
          ...item,
          isSelected: true,
        };
      } else {
        return {
          ...item,
          isSelected: false,
        };
      }
    });

    dispatch({type: 'UPDATE_WALLET_LIST', payload: data});
  };

export const selectTransactionCategoryDispatch =
  (params: any) => (dispatch: Dispatch<IGlobal>) => {
    const data = params.transactionCategory.map(item => {
      if (item.id === params.transactionCategoryId) {
        return {
          ...item,
          isSelected: true,
        };
      } else {
        return {
          ...item,
          isSelected: false,
        };
      }
    });

    dispatch({type: 'CHOOSE_TRANSACTION_CATEGORY', payload: data});
  };
