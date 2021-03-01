import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../../redux/IState';
import AddAccount from './partials/AddAccount';
import { IStateAccount } from './store/reducerAccount';
import { IAccountInfo } from './types';

interface IAccountsState {
    accounts: IStateAccount;
};
interface IAccountsDispatch {};
interface IAccountsProps extends IAccountsState, IAccountsDispatch {}

const AccountsView: React.FC<IAccountsProps> = ({accounts}) => {
    const list: IAccountInfo[] = accounts.list;
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Accounts</Text>
            <AddAccount/>
            <View>
                {list.map((acct: IAccountInfo, _key: number) => {
                    return (
                        <View key={_key}>
                            <Text>{acct.title}</Text>
                        </View>
                    )
                })}
            </View>
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
        fontSize: 25,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        paddingBottom: 15
    }
});

const mapState = (state: IState): IAccountsState => ({
    accounts: state.account
});
const mapDispatch = (dispatch: Dispatch): IAccountsDispatch => ({});
const Accounts = connect(mapState, mapDispatch)(AccountsView);

export default Accounts;