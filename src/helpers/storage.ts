import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = {
  // AsyncStorage
  AsyncStorage: {
    Set: async (key, value) => {
      const value2 = objectToString(value);
      await AsyncStorage.setItem(key, value2);
    },
    Get: async key => {
      const result = await AsyncStorage.getItem(key);

      if (result) {
        return result;
      }
      return null;
    },
    Remove: async key => await AsyncStorage.removeItem(key),
  },
};

const objectToString = value => {
  let value2 = null;
  if (
    typeof value === 'object' ||
    typeof value === 'boolean' ||
    typeof value === 'number'
  ) {
    value2 = JSON.stringify(value);
  } else if (typeof value === 'string') {
    value2 = value;
  }
  return value2;
};

export default storage;
