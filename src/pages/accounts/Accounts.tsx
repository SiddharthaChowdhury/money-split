import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../../redux/IState';

interface IAccountsState {};
interface IAccountsDispatch {};
interface IAccountsProps extends IAccountsState, IAccountsDispatch {}

const AccountsView: React.FC<IAccountsProps> = () => {
    return(
        <View>
            <Text> welcome Accounts</Text>
        </View>
    )
} 

const mapState = (state: IState): IAccountsState => ({});
const mapDispatch = (dispatch: Dispatch): IAccountsDispatch => ({});
const Accounts = connect(mapState, mapDispatch)(AccountsView);

export default Accounts;