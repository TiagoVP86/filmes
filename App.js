import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

export default function Filmes() {
 return (
   <NavigationContainer>
     <StatusBar hidden={true} />
     <Routes/>
   </NavigationContainer>
  );
}