import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { IState } from "../../../../redux/IState";
import { CONST_APP_COLOR_LIGHT_BG, CONST_APP_COLOR_LIGHT_BG_GOLDEN, CONST_APP_COLOR_LIGHT_FG } from "../../../constants/const_app";
import DeleteSvg from "../../../svg/DeleteSvg";
import utilApp from "../../../utils/utilApp";
import { acAccountSplitUpdate } from "../../accounts/store/actionAccount";
import { IStateAccount } from "../../accounts/store/reducerAccount";
import { IAccountInfo, ISplitInfo } from "../../accounts/types";

interface ISplitAddFormState {
    account: IStateAccount;
}
interface ISplitAddFormDispatch {
    onUpdateAccountSplits: (accountId: string, splits: ISplitInfo[]) => Action;
}
interface ISplitAddFormProps extends ISplitAddFormState, ISplitAddFormDispatch {
    selectedSplit?: ISplitInfo;
}

const SplitAddFormView: React.FC<ISplitAddFormProps> = ({account, selectedSplit: SP, onUpdateAccountSplits}) => {
    const [availablePercent, setAvailablePercent] = React.useState(100);
    const [selectedSplit, setSelectedSplit] = React.useState<ISplitInfo | undefined>(SP)
    const [name, onChangeText] = React.useState('');
    const [percent, setPercent] = React.useState(availablePercent);
    const [color, setColor] = React.useState('#000');

    const getAvailablePercent = () => {
        const activeAcct = account.list.find((acct: IAccountInfo) => acct.id === account.activeId);
        if(!activeAcct) {
            alert('Error-x226: Account selection failed');
            return 0;
        }
        const usedPercent = activeAcct.splits.reduce((accumulator: number, split: ISplitInfo) => accumulator + (split.id !== "0" ? split.percentage || 0 : 0), 0);
        return (100 - usedPercent);
    }

    const updateSplit = (isUpdate?: boolean) => {
        const activeAccount = account.list.find((acc: IAccountInfo) => acc.id === account.activeId);
        let splitList = activeAccount?.splits || [];

        if(!isUpdate) {
            const id = + new Date();
            splitList.unshift({
                id: id.toString(),
                amount: 0,
                title: name,
                color,
                percentage: percent
            })
        } else {
            if(selectedSplit) {
                splitList = (activeAccount?.splits || []).map((spl: ISplitInfo) => {
                    if(spl.id === selectedSplit.id) {
                        return {
                            ...spl,
                            title: name,
                            color,
                            percentage: percent
                        }
                    }

                    return spl;
                });
            }
        }
        onUpdateAccountSplits(account.activeId!, splitList);
        setSelectedSplit(undefined);
        onChangeText('');
    }

    const deleteSplit = () => {
        if(!selectedSplit) {
            return;
        }
        const activeAccount = account.list.find((acc: IAccountInfo) => acc.id === account.activeId);
        const splitList = (activeAccount?.splits || []).filter((spl: ISplitInfo) => spl.id !== selectedSplit.id);

        Alert.alert(
            'Confirm delete', 
            `Are you sure you want to delete the selected split?`, 
            [
                {
                    text: "Cancel",
                    onPress: () => {}
                },
                { 
                    text: "Yes delete", 
                    onPress: () => {
                        onUpdateAccountSplits(account.activeId!, splitList);
                        onChangeText('');
                        setSelectedSplit(undefined);
                    }
                }
            ]
        );
    }

    React.useEffect(() => {
        setSelectedSplit(SP);
    }, [SP]);

    React.useEffect(() => {
        const avPercent = getAvailablePercent();
        setAvailablePercent(avPercent);
        setPercent(avPercent);
        onChangeColor();
    }, [account])

    React.useEffect(() => {
        if(selectedSplit) {
            onChangeText(selectedSplit.title);
            setPercent(selectedSplit.percentage!);
            setColor(selectedSplit.color);

            const avPerc = getAvailablePercent();

            setAvailablePercent(avPerc + (selectedSplit.percentage || 0));
            setPercent(selectedSplit.percentage || 0);
        }
    }, [selectedSplit]);

    const onChangeColor = () => {
        setColor(utilApp.getRandomColor());
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.textCont}>
                    <Text style={styles.inputLabel}>Split name</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        value={name}
                        maxLength={18}
                        placeholder={"Max 18 chars"}
                    />
                </View>
                <View style={styles.numberCont}>
                    <Text style={styles.inputLabel}>%</Text>
                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.input}
                        onChangeText={text => {
                            const val = parseInt(text);
                            if (val <= availablePercent || isNaN(val)) {
                                setPercent(val);
                            }
                        }}
                        value={!isNaN(percent) ? percent.toString() : ""}
                        maxLength={3}
                    />
                </View>
                <Pressable style={styles.colorCont} onPress={onChangeColor}> 
                    <Text style={styles.inputLabel}>Color</Text>
                    <View style={[{backgroundColor: `${color}`}, styles.input]}/>
                </Pressable>
                <View style={styles.saveCont}>
                    <Text style={styles.inputLabel}></Text>
                    <Pressable style={[styles.input, styles.createBtn]} onPress={() => updateSplit(!!selectedSplit)}>
                        <Text style={styles.createBtnText}>{ selectedSplit ? 'Update' : 'Create +'}</Text>
                    </Pressable>
                </View>
                {selectedSplit && 
                    <View>
                        <Text style={styles.inputLabel}></Text>
                        <Pressable style={styles.deleteBtn} onPress={deleteSplit}>
                            <DeleteSvg width={35} height={35} color={'#C0C0C0'}/>
                        </Pressable>
                    </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    formContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    textCont: {
        width: '40%',
        marginRight: 5
    },
    numberCont: {
        width: '12%',
        marginRight: 5,
        // backgroundColor: 'cyan'
    },
    colorCont: {
        width: '12%',
        marginRight: 5,
    },
    inputLabel: {
        marginBottom: 5
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 2,
        borderColor: CONST_APP_COLOR_LIGHT_BG,
        borderRadius: 5,
        padding: 10
    },

    saveCont: {
        marginRight: 5
    },

    createBtn: {
        backgroundColor: CONST_APP_COLOR_LIGHT_BG,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: CONST_APP_COLOR_LIGHT_BG_GOLDEN,
        borderWidth: 5
    },
    createBtnText: {
        color: CONST_APP_COLOR_LIGHT_FG,
    },
    deleteBtn: {

    }
})

const mapState = (state: IState): ISplitAddFormState => ({
    account: state.account
});
const mapDispatch = (dispatch: Dispatch): ISplitAddFormDispatch => ({
    onUpdateAccountSplits: (accountId: string, splits: ISplitInfo[]) => dispatch(acAccountSplitUpdate(accountId, splits))
});

const SplitAddForm = connect(mapState, mapDispatch)(SplitAddFormView);
export default SplitAddForm;