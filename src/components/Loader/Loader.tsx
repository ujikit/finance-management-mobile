import React, {memo} from 'react';
import Modal from 'react-native-modal';
import {View, ActivityIndicator} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';

import {COLORS} from '../../configs';

import styles from './styles';

const Loader = () => {
  const {globalState} = useSelector(
    (state: any) => ({
      globalState: state.global,
    }),
    shallowEqual,
  );

  const {loader} = globalState;

  return (
    <Modal
      visible={loader.isVisible}
      transparent={true}
      style={styles.wrapModal}>
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={COLORS.primary_900}
          style={{fontSize: 30}}
        />
      </View>
    </Modal>
  );
};

Loader.defaultProps = {
  show: false,
};

export default memo(Loader);
