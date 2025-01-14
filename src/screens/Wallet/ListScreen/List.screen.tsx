import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  FlatList,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from '../../../configs';

import ListLogic from './List.logic';
import {ListScreenProps} from './List.types';

const ListScreen = (props: ListScreenProps) => {
  const {actions, data} = ListLogic(props);

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
          <View style={{}}>
            <FlatList
              data={data.walletList}
              contentContainerStyle={{paddingHorizontal: 20, paddingTop: 50}}
              renderItem={({item}) => (
                <TouchableOpacity
                  disabled={item.isSelected ? true : false}
                  onPress={() => actions._handleSelectWallet(item.id)}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: COLORS.primary_100,
                    marginBottom: 10,
                    height: 80,
                    padding: 15,
                    borderRadius: 10,
                    alignItems: 'center',
                    borderWidth: item.isSelected ? 1 : 0,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    {item.isSelected ? <Text>✅</Text> : null}
                    <View style={{paddingLeft: 10}}>
                      <Text numberOfLines={1}>{item.name}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                    }}>
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
      <View style={{position: 'absolute', bottom: 50, right: 30}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('WalletCreateScreen')}
          style={{
            backgroundColor: 'red',
            marginVertical: 5,
            borderRadius: 50,
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListScreen;
