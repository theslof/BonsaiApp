import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    SectionList,
    TouchableOpacity,
    Modal,
} from 'react-native';
const styles = require('./Styles');

export default class FindJobs extends Component<{}> {
    state = {
        modalVisible: false,
    };

    modalData = '';

    showModal(visible, data) {
        if (visible && data != null) {
            this.setState({modalVisible: true});
            this.modalData = data;
        } else {
            this.setState({modalVisible: false});
        }
    }

    static navigationOptions = {
        tabBarLabel: 'Lediga jobb',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./magnifying-glass.png')}
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
            <View style={styles.padTop}>
                <Text style={styles.header}>Lediga jobb</Text>
                <SectionList
                    style={styles.sectionList}
                    sections={[
                        {
                            data: [{title: 'Test', text: 'This is text for Test'},
                                {title: 'Test2', text: 'This is text for Test2'},
                                {title: 'Test3', text: 'This is text for Test3'},]
                        }
                    ]}
                    renderItem={({item}) =>
                        <TouchableOpacity style={[styles.item, styles.jobItem]} onPress={() => this.showModal(true, item.text)}>
                            <Text style={styles.itemValue}>{item.title}</Text>
                        </TouchableOpacity>
                    }
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <Text style={[styles.instructions, styles.padTop]}>{this.modalData}</Text>
                    <TouchableOpacity onPress={() => this.showModal(false)}>
                        <Text style={styles.header}>Close</Text>
                    </TouchableOpacity>
                </Modal>
            </View>
        );
    }
}