import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS, STYLES} from '../../../configs';

import styles from './Create.styles';
import CreateLogic from './Create.logic';
import {CreateScreenProps} from './Create.types';

const CreateScreen = (props: CreateScreenProps) => {
  const {data, actions} = CreateLogic(props);

  const {form, button} = data.form.TransactionCreate;

  return (
    <View style={STYLES.fx1}>
      <ScrollView
        bounces={false}
        style={{backgroundColor: COLORS.white_100}}
        contentContainerStyle={{
          paddingBottom: Platform.select({ios: 200, android: 25}),
        }}>
        <SafeAreaView>
          <View style={styles.marginHorizontal30}>
            <View style={styles.wrapContentWallet}>
              <Text>Wallet Name:</Text>
              <View style={styles.marginTop10}>
                <Text style={STYLES.txtAlignCenter}>
                  ({data.selectedWallet?.name})
                </Text>
                <Text style={STYLES.txtAlignCenter}>
                  Remain balance: {data.selectedWallet?.total}
                </Text>
              </View>
            </View>
            {Object.entries(form).map((item, index) => {
              const {title, value, placeholder, button} = item[1];

              return (
                <TouchableOpacity
                  disabled={!!!button}
                  onPress={button?.onPress}
                  key={index}
                  style={styles.wrapFormItem}>
                  <Text style={styles.textLableStyles}>{title}</Text>
                  {!!button ? (
                    <Text>{data.selectedTransactionCategory?.name}</Text>
                  ) : (
                    <TextInput
                      value={value}
                      placeholder={placeholder}
                      placeholderTextColor={'gray'}
                      style={{color: 'black'}}
                      onChangeText={(_val: string) =>
                        actions._handleInput(item[0], _val)
                      }
                    />
                  )}
                </TouchableOpacity>
              );
            })}

            {Object.entries(button).map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => item[1].actions(data.form)}
                  style={styles.wrapButtonItem}>
                  <Text style={styles.padding20}>{item[1].title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default CreateScreen;
