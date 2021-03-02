import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../../redux/IState';
import { CONST_APP_COLOR_INFO } from '../../constants/const_app';
import InfoSvg from '../../svg/InfoSvg';
import AddAccount from './partials/AddAccount';
import AccountsList from './partials/ListAccounts';
interface IAccountsState {
};
interface IAccountsDispatch {
};
interface IAccountsProps extends IAccountsState, IAccountsDispatch {}

const AccountsView: React.FC<IAccountsProps> = ({}) => {

    const showAccountsInfo = () => {
        Alert.alert("What is account?", "Consider it as your virtual back account, where you can split your total balance into multiple 'SPLITS'");
    }

    return(
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Accounts</Text>
                <TouchableWithoutFeedback onPress={showAccountsInfo}>
                    <View>
                        <InfoSvg width={20} height={20} color={CONST_APP_COLOR_INFO}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <AddAccount/>
            <AccountsList/>
        </View>
    )
} 

const styles = StyleSheet.create({
	container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 15
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row'
	},
    heading: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15
    },
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 10
    }
});

const mapState = (state: IState): IAccountsState => ({
});
const mapDispatch = (dispatch: Dispatch): IAccountsDispatch => ({
});
const Accounts = connect(mapState, mapDispatch)(AccountsView);

export default Accounts;