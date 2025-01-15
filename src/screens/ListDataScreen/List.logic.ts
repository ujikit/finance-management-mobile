import {shallowEqual, useDispatch} from 'react-redux';

import {useAppSelector} from '../../redux/hook';
import {selectTransactionCategoryDispatch} from '../../redux/actions';

import {ListScreenProps} from './List.types';

const ListLogic = (props: ListScreenProps) => {
  const dispatch = useDispatch();

  const global = useAppSelector(state => state.global, shallowEqual);

  const {transactionCategory} = global;

  const _handleSelectTransactionCategory = transactionCategoryId => {
    const params = {
      transactionCategoryId,
      transactionCategory,
    };

    dispatch(selectTransactionCategoryDispatch(params) as any);
  };

  return {
    actions: {_handleSelectTransactionCategory},
    data: {transactionCategory},
  };
};

export default ListLogic;
