import {Dispatch} from 'react';

import {IGlobal} from '../types/global';

export type CHOOSE_LANGUAGE = 'CHOOSE_LANGUAGE';

export const chooseLanguage =
  (data: string) => (dispatch: Dispatch<IGlobal>) => {
    // dispatch({ type: 'CHOOSE_LANGUAGE', payload: data });
  };
