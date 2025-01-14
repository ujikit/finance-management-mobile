import {CommonActions} from '@react-navigation/native';

let _navigator;

export const NavigationService = {
  setTopLevelNavigator: function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
  },
  navigate: function navigate(screen, params) {
    // set active property
    _navigator.dispatch(
      CommonActions.navigate({
        name: screen,
        params,
      }),
    );
  },
  reset: function reset(params) {
    _navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: params}],
      }),
    );
  },
  goBack: function goBack(params) {
    _navigator.dispatch(CommonActions.goBack());
  },
  globalNavigate: function navigate(screen, params) {
    _navigator.dispatch(
      CommonActions.navigate({
        name: screen,
        params,
      }),
    );
  },
};

export default NavigationService;
