import React, {Component} from 'react';
import {
    Text,
    Image,
    SectionList,
    TouchableOpacity,
} from 'react-native';
const styles = require('./Styles');

export default class MyJobs extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: 'Mina jobb',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./calendar.png')}
                style={[styles.icon, {
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                }]}
            />
        ),
    };

    render() {
        return (
            <SectionList
                style={[styles.sectionList]}
                sections={[
                    {title: 'Aktiva', data: []},
                    {title: 'Avsutade', data: []}
                ]}
                renderItem={({item}) =>
                    <TouchableOpacity>
                        <Text style={styles.item}>{item}</Text>
                    </TouchableOpacity>
                }
                renderSectionHeader={({section}) => <Text
                    style={[styles.sectionHeader, styles.padTop]}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        );
    }
}