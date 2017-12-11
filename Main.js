import React, {Component} from 'react';
import {View} from 'react-native';
import {TabNavigator} from 'react-navigation';
import FindJobs from './FindJobs';
import MyJobs from './MyJobs';
import MyProfile from './MyProfile';

const styles = require('./Styles');

const MyNavigator = TabNavigator({
        FindJobs: {
            screen: FindJobs,
        },
        MyJobs: {
            screen: MyJobs,
        },
        Profile: {
            screen: MyProfile,
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            tintColor: '#666666',
            activeTintColor: '#3f9cf3',
            showIcon: true,
        },
    });

export default class Main extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <MyNavigator navigation={this.props.navigation}/>
            </View>
        );
    }
}
Main.router = MyNavigator.router;