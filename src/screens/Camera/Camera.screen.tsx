//package import here
import React from 'react';
import {Image, View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

//local import here
import styles from './Camera.styles';
import CameraLogic from './Camera.logic';
import {COLORS, IMAGES, STYLES} from '../../configs';
import {ArrowLeftIcon, SwitchCameraIcon, VoltIcon} from '../../assets/svgs';

const CameraComponent = props => {
  //logic value here
  const insets = useSafeAreaInsets();

  const {route} = props;
  const {data: localData, actions} = CameraLogic(props);
  const {params} = route;
  const {screenFrom, data, type} = params;

  let headerTitle = '';

  // Set the header title
  if (screenFrom === 'WaterServices') {
    headerTitle =
      data.status === 'Done'
        ? data.title
        : type === 'electricity'
        ? 'Input kWh Meter'
        : 'Input Meter';
  } else {
    headerTitle = I18n.t('takePhoto');
  }

  //place your extension component here

  return (
    <View style={[styles.container, {paddingVertical: insets.bottom}]}>
      <RNCamera
        ref={localData.refCamera}
        style={STYLES.fx1}
        captureAudio={false}
        type={
          localData.cameraType
            ? RNCamera.Constants.Type.back
            : RNCamera.Constants.Type.front
        }
        flashMode={localData.flashMode}>
        <View style={styles.headerWrap}>
          <Header
            shadow={false}
            color={COLORS.transparent}
            styleContainer={styles.headerContainer}>
            <Button
              testID="testButtonGoBack"
              types="nude"
              width={40}
              height={40}
              styleWrap={styles.borderRadiusButton}
              styleContainer={styles.borderRadiusButton}
              onPress={() => actions.goBack()}>
              <ArrowLeftIcon
                width={21}
                height={21}
                fill={COLORS.primaryWhite}
              />
            </Button>
            <Text style={[styles.headerTitle, STYLES.mrl16]}>
              {headerTitle}
            </Text>
          </Header>
        </View>
        {screenFrom === 'WaterServices' && (
          <View style={STYLES.fx1}>
            <View style={styles.topWrap}>
              <Text style={styles.descText}>
                {I18n.t('placeWaterMeterBox')}
              </Text>
            </View>
            <View style={styles.middleWrap}>
              <View style={styles.coverWrap} />
              <Image
                source={IMAGES.cameraFrame}
                resizeMode="contain"
                style={styles.cameraFrame}
              />
              <View style={styles.coverWrap} />
            </View>
            <View style={styles.bottomWrap} />
          </View>
        )}
        <View style={styles.wrapAction}>
          <View style={styles.wrapSubAction}>
            <Button
              types="nude"
              width={40}
              height={40}
              styleWrap={styles.borderRadiusButton}
              styleContainer={styles.borderRadiusButton}
              onPress={() => actions._handleFlashLight()}>
              <VoltIcon fill={COLORS.primaryWhite} width={35} height={35} />
            </Button>
          </View>
          <View style={styles.wrapSubAction}>
            <View style={styles.wrapCapture}>
              <Button
                color={COLORS.primaryWhite}
                width={40}
                height={40}
                styleWrap={styles.borderRadiusButton}
                styleContainer={styles.borderRadiusButton}
                onPress={() => actions._handleCapture()}
              />
            </View>
          </View>
          <View style={styles.wrapSubAction}>
            <Button
              types="nude"
              width={40}
              height={40}
              styleWrap={styles.borderRadiusButton}
              styleContainer={styles.borderRadiusButton}
              onPress={() => actions._handleCameraType()}>
              <SwitchCameraIcon
                fill={
                  localData.globalReducer.camera.flash.isActive
                    ? COLORS.orange50
                    : COLORS.primaryWhite
                }
                width={35}
                height={35}
              />
            </Button>
          </View>
        </View>
      </RNCamera>
    </View>
  );
};

export default CameraComponent;
