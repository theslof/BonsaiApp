import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    SectionList,
    TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';

const styles = require('./Styles');

export default class MyProfile extends Component<{}> {
    state = {
        user: '',
    };

    static navigationOptions = {
        tabBarLabel: 'Profil',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./cog.png')}
                style={[styles.icon, {
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                }]}
            />
        ),
    };

    async componentDidMount() {

        try {

            // Get User Credentials
            let user = await firebase.auth().currentUser;

            this.setState({
                user: user.uid
            });

        } catch (error) {
            this.setState({
                user: error.toString()
            });
        }

    }

    render() {
        return (
            <SectionList
                style={[styles.sectionList]}
                sections={[
                    {
                        title: 'Din info', data: [
                        {key: 'Adress', value: 'Min adress'},
                        {key: 'Telefonnummer', value: '7777-777777'},
                        {key: 'Email', value: 'email@domain.com'},]
                    },
                    {
                        title: 'Kontakta oss', data: []
                    },
                    {
                        title: 'Övrigt', data: [
                        {key: 'User ID', value: this.state.user},
                    ]
                    },
                ]}
                renderItem={({item}) =>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Text style={styles.itemValue}>{item.value}</Text>
                            <Text style={styles.itemKey}>{item.key}</Text>
                        </View>
                    </TouchableOpacity>
                }
                renderSectionHeader={({section}) => <Text
                    style={[styles.sectionHeader, styles.padTop]}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        );
    }
}