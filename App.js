import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
//LOCAL
import Home from './app/pages/Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home }
}, { headerMode: 'none' });

export default createAppContainer(AppNavigator);
