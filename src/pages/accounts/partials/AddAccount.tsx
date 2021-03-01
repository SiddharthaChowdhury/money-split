import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { CONST_APP_COLOR_LIGHT_BG } from '../../../constants/const_app';

const AddAccount: React.FC<any> = () => {
    const [value, onChangeText] = React.useState('');

    const onConfirmAccountCreation = () => {
        console.log("New Account is created")
    }

    const handleCreateAccount = () => {
        const tempVal = value;
        if(tempVal.replace(/[_]/g, '').length === 0) {
            return;
        }
        Alert.alert(
            "Confirm account creation",
            `Are you sure you want to create new account - "${value}" ?`,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: onConfirmAccountCreation }
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.container}>
            <Text>Create new account</Text>
            <View style={styles.formCont}>
                <TextInput
                    style={styles.inputAcct}
                    onChangeText={text => onChangeText(text.replace(/[^a-zA-Z0-9]/g, "_"))}
                    value={value}
                    placeholder={'Business_account (Max: 18 chars)'}
                    maxLength={18}
                />
                <TouchableWithoutFeedback onPress={handleCreateAccount}>
                    <View style={styles.saveBtn}>
                        <Text style={styles.saveBtnText}>Create</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
        width: '100%',
	},

    formCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputAcct: {
        width: '80%',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: CONST_APP_COLOR_LIGHT_BG,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
    },
    saveBtn: {
        width: '19%',
        marginLeft: 5,
        // backgroundColor: CONST_APP_COLOR_LIGHT_BG,
        height: 35,
        justifyContent: "center",
        alignItems: 'center',
    },
    saveBtnText: {
        color: CONST_APP_COLOR_LIGHT_BG,
        fontWeight: "bold"
    }
});

export default AddAccount;