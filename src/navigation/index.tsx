import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './stacks';

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
