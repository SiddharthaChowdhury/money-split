import React from 'react';
import { ScrollView, View , Text, StyleSheet, TouchableWithoutFeedback, Pressable } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../../../redux/IState';
import { CONST_APP_COLOR_SURPLUS } from '../../../constants/const_app';
import utilApp from '../../../utils/utilApp';
import { IStateAccount } from '../../accounts/store/reducerAccount';
import { IAccountInfo, ISplitInfo } from '../../accounts/types';

interface IAccountsState {
    accounts: IStateAccount
};
interface IAccountsDispatch {
    // onSetActive: (id: string) => Action
};
interface IAccountsProps extends IAccountsState, IAccountsDispatch {
    onSplitClicked?: (split: ISplitInfo) => void;
}

const SplitsListView: React.FC<IAccountsProps> = ({accounts, onSplitClicked}) => {
    const account = accounts.list.find((acct: IAccountInfo) => acct.id === accounts.activeId);
    const [splits, setSplits] = React.useState<ISplitInfo[]>(account?.splits || []); 

    const getSurplusSplit = () => {
        if(!account || (account && account.totalAmount === 0)) {
            return;
        }
        const splitSum = splits.reduce((accumulator: number, split: ISplitInfo) => {
            return accumulator + split.percentage!;
        }, 0);
        const difference  = account.totalAmount - splitSum;
        const diffPercentage = utilApp.getPercentage(difference, account.totalAmount);

        if(diffPercentage > 0) {
            setSplits((prevSplits: ISplitInfo[]) => {
                return [
                    {
                        id: '0',
                        amount: difference,
                        title: 'Surplus available',
                        color: CONST_APP_COLOR_SURPLUS,
                        percentage: diffPercentage
                    },
                    ...prevSplits,
                ]
            })
        };

    };

    React.useEffect(() => {
        setSplits(account?.splits || [])
    }, [accounts])

    React.useEffect(() => {
        getSurplusSplit();
    }, [splits])

    return(
        <View style={styles.container}>
            <Text >Account splits</Text>
            {splits.length === 0
            ? (
                <ScrollView style={styles.scrollableView}>
                    <View style={styles.item}>
                        <Text>No splits exists at the moment</Text>
                    </View>
                </ScrollView>
            )
            : (
                <ScrollView style={styles.scrollableView}>
                {splits.map((split: ISplitInfo, _key: number) => {
                    const isSurplus = split.id === "0";
                    return (
                        <Pressable style={isSurplus ? [styles.item, styles.itemSurplus] : styles.item} key={_key} onPress={() => onSplitClicked && !isSurplus ? onSplitClicked(split): {}}>
                            <View style={[styles.itemColor, {backgroundColor: `${split.color}`}]}/>
                            <Text >{split.percentage}%</Text>
                            <Text style={styles.itemTitle}>{split.title}</Text>
                        </Pressable>
                    )
                })}
                </ScrollView>
            )
            }
            
        </View>
    )
} 

const styles = StyleSheet.create({
	container: {
        width: '100%',
        // height: '81%',
        marginTop: 15,
        // padding: 15
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row',
        // backgroundColor: 'cyan'
        
	},
    scrollableView: {
        width: '100%',
        height: '45%',
        marginTop: 8,
        // backgroundColor: 'grey',
    },
    item: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
        // borderWidth: 2,
        marginBottom: 1,
        height: 50,
        backgroundColor: '#fdf8ee',
        flexDirection: 'row',
        borderRadius: 3
    },
    itemSurplus: {
        backgroundColor: CONST_APP_COLOR_SURPLUS,
    },

    itemColor: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderRadius: 50
    },

    itemTitle: {
        marginLeft: 10
    }
});

const mapState = (state: IState): IAccountsState => ({
    accounts: state.account
});
const mapDispatch = (dispatch: Dispatch): IAccountsDispatch => ({
    // onSetActive: (id: string) => dispatch(acAccountSetActive(id))
});
const SplitsList = connect(mapState, mapDispatch)(SplitsListView);

export default SplitsList;