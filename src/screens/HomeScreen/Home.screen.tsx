import {
  FlatList,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLORS} from '../../../src/configs';

import HomeLogic from './Home.logic';
import {HomeScreenProps} from './Home.types';

const HomeScreen = (props: HomeScreenProps) => {
  const {actions, data} = HomeLogic(props);

  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      <ScrollView
        bounces={false}
        style={{backgroundColor: COLORS.white_100}}
        contentContainerStyle={{
          paddingBottom: Platform.select({ios: 200, android: 25}),
        }}>
        <SafeAreaView>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('WalletListScreen')}
              style={{
                alignItems: 'center',
                backgroundColor: COLORS.primary_500,
                marginHorizontal: 30,
                padding: 15,
                borderRadius: 10,
              }}>
              <Text>Current Wallet</Text>
              <Text style={{marginTop: 10, fontSize: 30}}>
                Rp {data.selectedWallet?.total}
              </Text>
              <Text style={{marginTop: 10}}>({data.selectedWallet?.name})</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 40}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text
                  style={{
                    textAlign: 'center',
                  }}>{`Total Income\n(All Wallets)`}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 5}}>
                  Rp {data.globalWallet.in}
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text
                  style={{
                    textAlign: 'center',
                  }}>{`Total Outcome\n(All Wallets)`}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 5}}>
                  Rp {data.globalWallet.out}
                </Text>
              </View>
            </View>
            <FlatList
              data={data.transactionList}
              contentContainerStyle={{paddingHorizontal: 20, paddingTop: 50}}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    backgroundColor: COLORS.primary_100,
                    marginBottom: 10,
                    height: 80,
                    padding: 15,
                    borderRadius: 10,
                  }}>
                  <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <View>
                      <Text numberOfLines={1}>{item.name}</Text>
                    </View>
                    <View>
                      <Text numberOfLines={1}>
                        ({actions._handleWalletParser(item.wallet?.id)?.name})
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}>
                    <View
                      style={{
                        backgroundColor:
                          item.type === 'in'
                            ? COLORS.success_500
                            : COLORS.warning_500,
                        width: 40,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{color: 'white', fontWeight: 'bold'}}>
                        {item.type}
                      </Text>
                    </View>
                    <View>
                      <Text numberOfLines={1}>{item.total}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 120, right: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ExpenseCreateScreen')}
          style={{
            backgroundColor: 'red',
            marginVertical: 5,
            borderRadius: 50,
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{position: 'absolute', bottom: 50, right: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ExpenseCreateScreen')}
          style={{
            backgroundColor: 'red',
            marginVertical: 5,
            borderRadius: 50,
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Scan</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default HomeScreen;
