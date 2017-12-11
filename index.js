import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from "react-navigation";
import App from './App';
import Main from "./Main";

const Login = props => {
    return <App navigation={props.navigation} />;
};

const Navigator = StackNavigator({
    App: { screen: Login },
    Main: { screen: Main}
},{
    headerMode: 'none'
});

AppRegistry.registerComponent('BonsaiApp', () => Navigator);
