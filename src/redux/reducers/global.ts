import {Reducer} from 'redux';

import {IActionGlobal} from '../types/global';

export interface IGlobalState {
  loader: {
    isVisible: boolean;
  };
}

const initialState: IGlobalState = {
  loader: {isVisible: false},
};

const globalReducer: Reducer<IGlobalState, IActionGlobal> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'LOADER':
      return {...state, isVisible: action.payload};
    default:
      return state;
  }
};

export default globalReducer;
