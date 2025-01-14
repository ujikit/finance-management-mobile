import {Action} from 'redux';

export interface IGlobal extends Action<'LOADER'> {
  payload: boolean;
}

export type IActionGlobal = IGlobal;
