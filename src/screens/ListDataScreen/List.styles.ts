import {StyleSheet} from 'react-native';

import {COLORS} from '../../configs';

export default StyleSheet.create({
  flatlistContent: {paddingHorizontal: 20, paddingTop: 50},
  wrapItem: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary_100,
    marginBottom: 10,
    height: 80,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  paddingLeft10: {paddingLeft: 10},
});
