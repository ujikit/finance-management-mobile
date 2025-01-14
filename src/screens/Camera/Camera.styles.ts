//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY2, FONT_HEADLINE_H4 } from '../../configs/fonts';
import { widthByScreen } from '../../utils';

const CameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparent,
  },
  headerWrap: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  borderRadiusButton: {
    borderRadius: 40 / 2,
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryWhite,
  },
  topWrap: {
    flex: 1,
    backgroundColor: COLORS.blackOp3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  middleWrap: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coverWrap: {
    flex: 1,
    height: '100%',
    backgroundColor: COLORS.transparent,
  },
  cameraFrame: {
    width: widthByScreen(80),
    height: widthByScreen(45),
  },
  descText: {
    ...FONT_BODY2,
    color: COLORS.primaryWhite,
    marginBottom: 21,
  },
  bottomWrap: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.blackOp3,
  },
  wrapAction: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 113,
  },
  wrapSubAction: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapCapture: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: COLORS.primaryWhite,
    position: 'absolute',
  },
});

export default CameraStyles;
