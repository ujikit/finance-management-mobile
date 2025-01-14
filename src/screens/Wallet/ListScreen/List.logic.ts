import { useState } from 'react';
import { ListScreenProps } from './List.types';

const ListLogic = (props: ListScreenProps) => {
  const [walletList, setWalletList] = useState([
    {
      name: 'Dompet Kuliah',
      total: 1000,
      isChecked: false,
    },
    {
      name: 'Dompet Futsal',
      total: 2000,
      isChecked: true,
    },
    {
      name: 'Dompet Main',
      total: 3000,
      isChecked: false,
    },
  ]);

  return {
    actions: { setWalletList },
    data: { walletList },
  };
};

export default ListLogic;
