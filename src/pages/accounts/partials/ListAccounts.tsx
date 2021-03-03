import React from 'react';
import { ScrollView, View , Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-native';
import { Action, Dispatch } from 'redux';
import { IState } from '../../../../redux/IState';
import { acAccountSetActive } from '../store/actionAccount';
import { IStateAccount } from '../store/reducerAccount';
import { IAccountInfo } from '../types';

interface IAccountsState {
    accounts: IStateAccount;
};
interface IAccountsDispatch {
    onSetActive: (id: string) => Action
};
interface IAccountsProps extends IAccountsState, IAccountsDispatch {}

const AccountsListView: React.FC<IAccountsProps> = ({accounts, onSetActive}) => {
    const list: IAccountInfo[] = accounts.list;
    let history = useHistory();

    const handleAccountClick = (acctId: string) => {
        onSetActive(acctId);
        history.push('/splits');
    }

    return(
        <View style={styles.container}>
            <Text >Existing accounts</Text>
            <ScrollView style={styles.scrollableView}>
                {list.map((acct: IAccountInfo, _key: number) => {
                    return (
                        <TouchableWithoutFeedback key={_key} onPress={() => handleAccountClick(acct.id)}>
                            <View style={styles.item}>
                                <Text style={styles.itemTitle}>{acct.title}</Text>
                                <Text style={styles.itemMeta} >Amount: {acct.totalAmount}</Text>
                                <Text style={styles.itemMeta} >Splits: {acct.splits.length}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </ScrollView>
        </View>
    )
} 

const styles = StyleSheet.create({
	container: {
        // flex: 1,
        width: '100%',
        height: '81%',
        marginTop: 15,
        // padding: 15
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row'
        
	},
    scrollableView: {
        maxHeight: '100%',
        marginTop: 8,
        // backgroundColor: 'grey',
    },

    item: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
        // borderWidth: 2,
        marginBottom: 1,
        height: 40,
        backgroundColor: '#fdf8ee',
        flexDirection: 'row'
    },

    itemMeta: {
        marginLeft: 10,
        fontSize: 10
    },

    itemTitle: {
        marginLeft: 10
    }
});

const mapState = (state: IState): IAccountsState => ({
    accounts: state.account
});
const mapDispatch = (dispatch: Dispatch): IAccountsDispatch => ({
    onSetActive: (id: string) => dispatch(acAccountSetActive(id))
});
const AccountsList = connect(mapState, mapDispatch)(AccountsListView);

export default AccountsList;