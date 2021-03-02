import React from 'react';
import { ScrollView, View , Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-native';
import { Action, Dispatch } from 'redux';
import { IState } from '../../../../redux/IState';
import { CONST_APP_COLOR_UNCATEGORISED } from '../../../constants/const_app';
import utilApp from '../../../utils/utilApp';
import { IAccountInfo, ISplitInfo } from '../../accounts/types';

interface IAccountsState {
};
interface IAccountsDispatch {
    // onSetActive: (id: string) => Action
};
interface IAccountsProps extends IAccountsState, IAccountsDispatch {
    account: IAccountInfo;
    splits: ISplitInfo[];
}

const SplitsListView: React.FC<IAccountsProps> = (props) => {
    const {account} = props;
    const [splits, setSplits] = React.useState<ISplitInfo[]>(props.splits); 

    const getUnCategorisedSplit = () => {
        if(account.totalAmount === 0) {
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
                    ...prevSplits,
                    {
                        id: '_',
                        amount: difference,
                        title: 'Uncategorised',
                        color: CONST_APP_COLOR_UNCATEGORISED,
                        percentage: diffPercentage
                    }
                ]
            })
        };

    };

    React.useEffect(() => {
        getUnCategorisedSplit();
    }, [splits])

    return(
        <View style={styles.container}>
            <Text >Account Splits</Text>
            {splits.length === 0
            ? (
                <View style={styles.item}>
                    <Text>No splits exists at the moment</Text>
                </View>
            )
            : (
                <ScrollView style={styles.scrollableView}>
                {splits.map((split: ISplitInfo, _key: number) => {
                    return (
                        // <TouchableWithoutFeedback key={_key} onPress={() => handleAccountClick(acct.id)}>
                            <View style={styles.item} key={_key}>
                                <View style={[styles.itemColor, {backgroundColor: `${split.color}`}]}/>
                                <Text >{split.percentage}%</Text>
                                <Text style={styles.itemTitle}>{split.title}</Text>
                                
                            </View>
                        // </TouchableWithoutFeedback>
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
        maxHeight: '100%',
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
        flexDirection: 'row'
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