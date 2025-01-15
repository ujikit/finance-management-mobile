import {StyleSheet} from 'react-native';

import {COLORS} from '../../../configs';

export default StyleSheet.create({
  textLableStyles: {
    textTransform: 'none',
    paddingBottom: 10,
  },
  wrapFormItem: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
  },
  wrapButtonItem: {
    flex: 1,
    backgroundColor: COLORS.information_500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  marginHorizontal30: {marginHorizontal: 30},
});
