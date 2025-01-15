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

import {COLORS, STYLES} from '../../../configs';

import styles from './List.styles';
import ListLogic from './List.logic';
import {ListScreenProps} from './List.types';

const ListScreen = (props: ListScreenProps) => {
  const {actions, data} = ListLogic(props);

  const {navigation} = props;

  return (
    <View style={STYLES.fx1}>
      <ScrollView
        bounces={false}
        style={{backgroundColor: COLORS.white_100}}
        contentContainerStyle={{
          paddingBottom: Platform.select({ios: 200, android: 25}),
        }}>
        <SafeAreaView>
          <View>
            <FlatList
              data={data.walletList}
              contentContainerStyle={styles.flatlistContent}
              ListEmptyComponent={
                <View
                  style={[STYLES.fx1, STYLES.jusContCntr, STYLES.alItCenter]}>
                  <Text>Empty Wallet.</Text>
                  <Text>Try to Create new one</Text>
                </View>
              }
              renderItem={({item}) => (
                <TouchableOpacity
                  disabled={item.isSelected ? true : false}
                  onPress={() => actions._handleSelectWallet(item.id)}
                  style={[
                    styles.wrapItem,
                    {borderWidth: item.isSelected ? 1 : 0},
                  ]}>
                  <View style={[STYLES.fx1, STYLES.fxdRow]}>
                    {item.isSelected ? <Text>✅</Text> : null}
                    <View style={styles.paddingLeft10}>
                      <Text numberOfLines={1}>{item.name}</Text>
                    </View>
                  </View>
                  <View style={[STYLES.fx1, STYLES.alItEnd]}>
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
            backgroundColor: COLORS.information_500,
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
