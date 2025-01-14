import {Reducer} from 'redux';

import {IActionGlobal} from '../types/global';

export interface IGlobalState {
  loader: {
    isVisible: boolean;
  };
  transactionList: any[];
  walletList: any[];
}

const initialState: IGlobalState = {
  loader: {isVisible: false},
  transactionList: [],
  walletList: [],
};

const globalReducer: Reducer<IGlobalState, IActionGlobal> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'LOADER':
      return {...state, loader: {isVisible: action.payload}};
    case 'CREATE_TRANSACTION':
      return {
        ...state,
        transactionList: action.payload,
      };
    case 'UPDATE_TRANSACTION_LIST':
      return {
        ...state,
        transactionList: action.payload,
      };
    case 'UPDATE_WALLET_LIST':
      return {...state, walletList: action.payload};
    default:
      return state;
  }
};

export default globalReducer;
