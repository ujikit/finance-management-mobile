import { useState } from 'react';
import { HomeScreenProps } from './Home.types';

const HomeLogic = (props: HomeScreenProps) => {
  const [transactionList, setTransactionList] = useState([
    {
      name: 'Transferan dr mama',
      total: 1000,
      type: 'in',
      wallet: {
        id: 1,
      },
    },
    {
      name: 'Makan bakso',
      total: 1000,
      type: 'out',
      wallet: {
        id: 1,
      },
    },
    {
      name: 'Makan mie',
      total: 1000,
      type: 'out',
      wallet: {
        id: 2,
      },
    },
  ]);

  return {
    actions: { setTransactionList },
    data: { transactionList },
  };
};

export default HomeLogic;
