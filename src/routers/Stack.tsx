import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import WalletListScreen from '../screens/Wallet/ListScreen';
import WalletCreateScreen from '../screens/Wallet/CreateScreen';
import ExpenseCreateScreen from '../screens/Expense/CreateScreen';
import ListDataScreen from '../screens/ListDataScreen';

// format StackParamList = NamaScreen: routeprops
export type StackParamList = {
  HomeScreen: undefined;
};

const {Navigator, Screen} = createStackNavigator<StackParamList>();

const Stack = () => (
  <Navigator initialRouteName="SplashScreen">
    <Screen name="SplashScreen" component={SplashScreen} />
    <Screen name="HomeScreen" component={HomeScreen} />
    <Screen name="WalletListScreen" component={WalletListScreen} />
    <Screen name="WalletCreateScreen" component={WalletCreateScreen} />
    <Screen name="ExpenseCreateScreen" component={ExpenseCreateScreen} />
    <Screen name="ListDataScreen" component={ListDataScreen} />
  </Navigator>
);

export default Stack;
