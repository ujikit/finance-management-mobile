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
  const {data} = HomeLogic(props);

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
                backgroundColor: 'yellow',
                marginHorizontal: 30,
                padding: 15,
                borderRadius: 10,
              }}>
              <Text>Current Wallet</Text>
              <Text style={{marginTop: 10, fontSize: 30}}>Rp 20.000</Text>
              <Text style={{marginTop: 10}}>(Dompet Kuliah)</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 40}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text>Income</Text>
                <Text>100</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text>Spending</Text>
                <Text>200</Text>
              </View>
            </View>
            <FlatList
              data={data.transactionList}
              contentContainerStyle={{paddingHorizontal: 20, paddingTop: 50}}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'yellow',
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
                      <Text numberOfLines={1}>({item.wallet.id})</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}>
                    <View>
                      <Text numberOfLines={1}>{item.type}</Text>
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
          <Text>Out</Text>
        </TouchableOpacity>
      </View>
      <View style={{position: 'absolute', bottom: 50, right: 20}}>
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
      </View>
    </View>
  );
};

export default HomeScreen;
