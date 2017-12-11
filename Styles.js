import {
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    sectionList: {
        paddingTop: 0,
    },
    sectionHeader: {
        paddingTop: 0,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    sectionItem: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 20,
        minHeight: 80,
        borderColor: '#aaaaaa',
        borderWidth: 1,
    },
    jobItem: {
        borderLeftWidth: 3,
        borderLeftColor: '#3f9cf3',
    },
    itemValue:{
    },
    itemKey: {
        marginTop: 10,
        color: '#00cc8a',
    },
    padTop: {
        paddingTop: 50,
    },
});

module.exports = styles;