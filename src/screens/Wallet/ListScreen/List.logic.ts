import {shallowEqual} from 'react-redux';

import {useAppSelector} from '../../../redux/hook';

import {ListScreenProps} from './List.types';

const ListLogic = (props: ListScreenProps) => {
  const global = useAppSelector(state => state.global, shallowEqual);

  const {walletList} = global;

  return {
    actions: {},
    data: {walletList},
  };
};

export default ListLogic;
