import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  FlatCreate,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from '../../../configs';

import styles from './Create.styles';
import CreateLogic from './Create.logic';
import {CreateScreenProps} from './Create.types';

const CreateScreen = (props: CreateScreenProps) => {
  const {data, actions} = CreateLogic(props);

  const {form, button} = data.form.WalletCreate;

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
          <View style={{marginHorizontal: 30}}>
            <View style={{marginBottom: 40, alignItems: 'center'}}>
              <Text>Wallet Name:</Text>
              <Text>({data.selectedWallet.name})</Text>
            </View>
            {Object.entries(form).map((item, index) => {
              const {title, value, placeholder} = item[1];

              return (
                <View
                  key={index}
                  style={{
                    marginBottom: 20,
                    borderWidth: 1,

                    padding: 20,
                    borderRadius: 10,
                  }}>
                  <Text style={styles.textLableStyles}>{title}</Text>
                  <TextInput
                    value={value}
                    placeholder={placeholder}
                    onChangeText={(_val: string) =>
                      actions._handleInput(item[0], _val)
                    }
                  />
                </View>
              );
            })}

            {Object.entries(button).map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => item[1].actions(data.form)}
                  style={{
                    flex: 1,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <Text style={{padding: 20}}>{item[1].title}</Text>
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
