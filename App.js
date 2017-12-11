import React, {Component} from 'react';
import {
    View,
    Button,
} from 'react-native';
import Main from './Main';
import * as Firebase from 'firebase';

const styles = require('./Styles');

Firebase.initializeApp({
    apiKey: "AIzaSyCuenN2Rkwmz5PBXRuz5C0N5-jqPw_XkZ0",
    authDomain: "bonsaitest-f52d5.firebaseapp.com",
    databaseURL: "https://bonsaitest-f52d5.firebaseio.com",
    projectId: "bonsaitest-f52d5",
    storageBucket: "bonsaitest-f52d5.appspot.com",
    messagingSenderId: "174546600706"
});

export default class App extends Component<{}> {
    state = {
        title: 'Login'
    };

    async login(email, pass) {

        this.setState({title: 'Logging in'});

        try {
            await Firebase.auth()
                .signInWithEmailAndPassword(email, pass);

            console.log("Logged In!");
            this.setState({
                title: 'Logged in!'
            });

            this.props.navigation.navigate('Main');


        } catch (error) {
            console.log(error.toString())
            this.setState({
                title: error.toString(),
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title={this.state.title} onPress={() => this.login('theslof@gmail.com', 'testare')} />
            </View>
        );
    }
}