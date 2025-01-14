import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import WalletListScreen from '../screens/Wallet/ListScreen';
import WalletCreateScreen from '../screens/Wallet/CreateScreen';
import ExpenseCreateScreen from '../screens/Expense/CreateScreen';

// format StackParamList = NamaScreen: routeprops
export type StackParamList = {
  HomeScreen: undefined;
};

const {Navigator, Screen} = createStackNavigator<StackParamList>();

const Stack = () => (
  <Navigator initialRouteName="HomeScreen">
    <Screen name="HomeScreen" component={HomeScreen} />
    <Screen name="WalletListScreen" component={WalletListScreen} />
    <Screen name="WalletCreateScreen" component={WalletCreateScreen} />
    <Screen name="ExpenseCreateScreen" component={ExpenseCreateScreen} />
  </Navigator>
);

export default Stack;
