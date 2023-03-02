import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Navigation from './src/navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1E1E' }}>
      <StatusBar hidden />
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
