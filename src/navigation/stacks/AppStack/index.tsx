import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CAMERA_SCR, RESULT_SCR } from '../../routes';
import AppScreens from '../../../app';

export declare type AppStackParamList = {
  [CAMERA_SCR]: undefined;
  [RESULT_SCR]: {
    uri: string;
  };
};

const AppStackNavigator = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <AppStackNavigator.Navigator
      initialRouteName={CAMERA_SCR}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <AppStackNavigator.Screen
        name={CAMERA_SCR}
        component={AppScreens.Camera}
      />
      <AppStackNavigator.Screen
        name={RESULT_SCR}
        component={AppScreens.Result}
      />
    </AppStackNavigator.Navigator>
  );
}

export default AppStack;
