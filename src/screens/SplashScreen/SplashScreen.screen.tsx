//package import here
import React from 'react';
import {Text, View} from 'react-native';

//local import here

import styles from './SplashScreen.styles';
import SplashScreenLogic from './SplashScreen.logic';
import {SplashScreenProps} from './SplashScreen.types';

const SplashScreen = (props: SplashScreenProps) => {
  SplashScreenLogic(props);

  return (
    <View style={styles.container}>
      <Text style={styles.textLogo}>{`Finance\nManagement App`}</Text>
    </View>
  );
};

export default SplashScreen;
