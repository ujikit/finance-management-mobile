/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './src/redux/store/store';
import NavigationApp from './src/routers';

const App = () => (
  <Provider store={store}>
    <StatusBar animated={true} barStyle="dark-content" />
    <PersistGate loading={null} persistor={persistor}>
      <NavigationApp />
    </PersistGate>
  </Provider>
);

export default App;
