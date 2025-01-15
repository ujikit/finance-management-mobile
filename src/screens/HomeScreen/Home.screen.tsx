import {
  FlatList,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLORS, STYLES} from '../../../src/configs';

import styles from './Home.styles';
import HomeLogic from './Home.logic';
import {HomeScreenProps} from './Home.types';

const HomeScreen = (props: HomeScreenProps) => {
  const {actions, data} = HomeLogic(props);

  const {navigation} = props;

  return (
    <View style={STYLES.fx1}>
      <ScrollView
        bounces={false}
        style={{backgroundColor: COLORS.white_100}}
        contentContainerStyle={[
          styles.marginHorizontal30,
          {
            paddingBottom: Platform.select({ios: 200, android: 25}),
          },
        ]}>
        <SafeAreaView>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('WalletListScreen')}
              style={styles.wrapCurrentWallet}>
              <Text>Current Wallet</Text>
              <Text style={styles.textSelectedWallet}>
                Rp {data.selectedWallet?.total}
              </Text>
              <Text style={styles.marginTop10}>
                ({data.selectedWallet?.name})
              </Text>
            </TouchableOpacity>
            <View style={styles.wrapTotalInOut}>
              <View style={[STYLES.fx1, STYLES.alItCenter]}>
                <Text
                  style={
                    STYLES.txtAlignCenter
                  }>{`Total Income\n(All Wallets)`}</Text>
                <Text style={styles.textInOut}>Rp {data.globalWallet.in}</Text>
              </View>
              <View style={[STYLES.fx1, STYLES.alItCenter]}>
                <Text
                  style={
                    STYLES.txtAlignCenter
                  }>{`Total Outcome\n(All Wallets)`}</Text>
                <Text style={styles.textInOut}>Rp {data.globalWallet.out}</Text>
              </View>
            </View>
            <View style={styles.wrapSearch}>
              <View style={styles.wrapSearch2}>
                {Object.entries(data.form).map((item, index) => {
                  const {value} = item[1];

                  return (
                    <TextInput
                      key={index}
                      value={value}
                      placeholder={'Search title or description'}
                      onChangeText={(_val: string) =>
                        actions._handleInput(_val)
                      }
                    />
                  );
                })}
              </View>
              {/* <TouchableOpacity
                style={{
                  flex: 1,
                  width: '20%',
                  backgroundColor: COLORS.success_500,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Find</Text>
              </TouchableOpacity> */}
            </View>
            <FlatList
              data={data.filteredTransactionList}
              contentContainerStyle={styles.flatlistStyle}
              renderItem={({item}) => (
                <TouchableOpacity
                  disabled={true}
                  style={styles.wrapItemFlatlist}>
                  <View style={[STYLES.fx1, STYLES.jusContSpbtw]}>
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
                    style={[STYLES.fx1, STYLES.jusContSpbtw, STYLES.alItEnd]}>
                    <View
                      style={[
                        {
                          backgroundColor:
                            item.type === 'in'
                              ? COLORS.success_500
                              : COLORS.warning_500,
                        },
                        styles.wrapTransactionType,
                      ]}>
                      <Text
                        numberOfLines={1}
                        style={styles.textTransactionType}>
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
      <View style={styles.wrapCreateButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ExpenseCreateScreen')}
          style={styles.wrapCreateButton2}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{position: 'absolute', bottom: 50, right: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ExpenseCreateScreen')}
          style={{
            backgroundColor: COLORS.information_500,
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
