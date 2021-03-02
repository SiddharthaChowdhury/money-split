import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { IState } from '../../../redux/IState';
import { IStateAccount } from '../accounts/store/reducerAccount';
import { IAccountInfo, ISplitInfo } from '../accounts/types';
import SplitsList from './partials/SplitsList';

interface ISplitsState {
    account: IStateAccount;
};
interface ISplitsProps extends ISplitsState {};

const SplitsView: React.FC<ISplitsProps> = ({account}) => {
    const activeAccount: IAccountInfo | undefined = account.list.find((acct: IAccountInfo) => acct.id === account.activeId);
    const splits: ISplitInfo[] = activeAccount ? activeAccount.splits : [];

    if(!activeAccount) {
        return (
            <View>
                <Text>Account selection in progress</Text>
            </View>
        );
    }

    return (
        <View style={{width: '100%'}}>
            <Text>{activeAccount.title}</Text>
            <SplitsList account={activeAccount} splits={splits}/>
        </View>
    );
};

const mapState = (state: IState): ISplitsState => ({
    account: state.account
});

const Splits = connect(mapState, null)(SplitsView);

export default Splits;