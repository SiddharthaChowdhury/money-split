import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { CONST_APP_COLOR_LIGHT_BG } from '../../../constants/const_app';

const AddAccount: React.FC<any> = () => {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <Text>Create new account</Text>
            <TextInput
                style={styles.inputAcct}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={'Entertainment (Max: 18 chars)'}
                maxLength={18}
            />
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
        width: '100%',
        // backgroundColor: 'cyan', 
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row'
	},

    inputAcct: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: CONST_APP_COLOR_LIGHT_BG,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
    }
});

export default AddAccount;