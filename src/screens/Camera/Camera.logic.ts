//package import here
import {useState, useCallback, useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

//local import here
import CameraNavigator from './Camera.navigator';

const CameraLogic = props => {
  //package value here

  const {route, navigation} = props;
  const {params} = route;
  const {data, screenFrom, type} = params;

  const {navigator} = CameraLogic.dependencies;
  const {goBack} = navigator();
  const dispatch = useDispatch();
  const {complaintReducer, globalReducer, handoverReducer, maintenanceReducer} =
    useSelector(
      state => ({
        complaintReducer: state.complaint,
      }),
      shallowEqual,
    );

  //state value here
  const refCamera = useRef(null);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);
  const [cameraType, setCameraType] = useState(1);

  //place your function in here
  const _handleFlashLight = useCallback(() => {
    dispatch(
      setCamera({flash: {isActive: !globalReducer.camera.flash.isActive}}),
    );
    if (flashMode) {
      setFlashMode(RNCamera.Constants.FlashMode.off);
    } else {
      setFlashMode(RNCamera.Constants.FlashMode.torch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flashMode]);

  const _handleCapture = async () => {
    dispatch(showLoader({visible: true}));
    const options = {quality: 0.5, base64: true};
    const capture = await refCamera.current.takePictureAsync(options);

    dispatch(
      globalMaintenanceDispatch({
        currentSendSolutionImage: '',
        sendSolutionImageOne: `data:image/png;base64,${capture.base64}`,
      }),
    );

    // Maintenance
    setTimeout(() => {
      dispatch(showLoader({visible: false}));
    }, 2000);
  };

  const _handleCameraType = useCallback(() => {
    setCameraType(prevCameraType => (prevCameraType === 1 ? 0 : 1));
  }, []);

  return {
    //data props here
    data: {
      cameraType,
      flashMode,
      refCamera,
      globalReducer,
    },
    //actions props here
    actions: {
      _handleCameraType,
      goBack,
      setFlashMode,
      _handleFlashLight,
      _handleCapture,
    },
  };
};

export default CameraLogic;

CameraLogic.dependencies = {
  navigator: CameraNavigator,
};
