//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';

const SplashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textVersion: {
    fontSize: 15,
    color: COLORS.Tertiary_Gray_400,
    paddingTop: 50,
  },
});

export default SplashScreenStyles;
