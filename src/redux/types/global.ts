import {Action} from 'redux';

export interface IGlobal extends Action<'LOADER'> {
  payload: any;
}

export type IActionGlobal = IGlobal;
