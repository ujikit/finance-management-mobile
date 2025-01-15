import {StyleSheet} from 'react-native';
import {COLORS} from '../../configs';

export default StyleSheet.create({
  wrapCurrentWallet: {
    alignItems: 'center',
    backgroundColor: COLORS.primary_500,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  textSelectedWallet: {marginTop: 10, fontSize: 30},
  wrapTotalInOut: {flexDirection: 'row', marginTop: 40},
  textInOut: {fontWeight: 'bold', fontSize: 17, marginTop: 5},
  flatlistStyle: {paddingHorizontal: 20, paddingTop: 50},
  wrapItemFlatlist: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary_100,
    marginBottom: 10,
    height: 80,
    padding: 15,
    borderRadius: 10,
  },
  wrapTransactionType: {
    width: 40,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTransactionType: {color: 'white', fontWeight: 'bold'},
  wrapCreateButton: {position: 'absolute', bottom: 50, right: 20},
  wrapCreateButton2: {
    backgroundColor: COLORS.information_500,
    marginVertical: 5,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  marginTop10: {marginTop: 10},
});
