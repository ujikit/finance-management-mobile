import {StyleSheet} from 'react-native';

import {COLORS} from '../../../configs';

export default StyleSheet.create({
  wrapContentWallet: {marginBottom: 40, alignItems: 'center'},
  wrapFormItem: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
  },
  textLableStyles: {
    textTransform: 'none',
    paddingBottom: 10,
  },
  wrapButtonItem: {
    flex: 1,
    backgroundColor: COLORS.information_500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  marginTop10: {marginTop: 10},
  marginHorizontal30: {marginHorizontal: 30},
  padding20: {padding: 20},
});
