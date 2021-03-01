import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../../redux/IState';
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
        <View>
            <Text> welcome Accounts</Text>
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

const mapState = (state: IState): IAccountsState => ({
    accounts: state.account
});
const mapDispatch = (dispatch: Dispatch): IAccountsDispatch => ({});
const Accounts = connect(mapState, mapDispatch)(AccountsView);

export default Accounts;