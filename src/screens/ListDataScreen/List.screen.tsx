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

import {COLORS, STYLES} from '../../configs';

import styles from './List.styles';
import ListLogic from './List.logic';
import {ListScreenProps} from './List.types';

const ListScreen = (props: ListScreenProps) => {
  const {actions, data} = ListLogic(props);

  return (
    <View style={STYLES.fx1}>
      <ScrollView
        bounces={false}
        style={{backgroundColor: COLORS.white_100}}
        contentContainerStyle={{
          paddingBottom: Platform.select({ios: 200, android: 25}),
        }}>
        <SafeAreaView>
          <View style={{}}>
            <FlatList
              data={data.transactionCategory}
              contentContainerStyle={styles.flatlistContent}
              renderItem={({item}) => (
                <TouchableOpacity
                  disabled={item.isSelected ? true : false}
                  onPress={() =>
                    actions._handleSelectTransactionCategory(item.id)
                  }
                  style={[
                    {borderWidth: item.isSelected ? 1 : 0},
                    styles.wrapItem,
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
    </View>
  );
};

export default ListScreen;
