import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IState } from "../../../../redux/IState";
import { CONST_APP_COLOR_LIGHT_BG, CONST_APP_COLOR_LIGHT_BG_GOLDEN, CONST_APP_COLOR_LIGHT_FG } from "../../../constants/const_app";
import utilApp from "../../../utils/utilApp";
import { IStateAccount } from "../../accounts/store/reducerAccount";
import { IAccountInfo, ISplitInfo } from "../../accounts/types";

interface ISplitAddFormState {
    account: IStateAccount;
}
interface ISplitAddFormDispatch {}
interface ISplitAddFormProps extends ISplitAddFormState, ISplitAddFormDispatch {}

const SplitAddFormView: React.FC<ISplitAddFormProps> = ({account}) => {
    let availablePercent = 100;
    const [name, onChangeText] = React.useState('');
    const [percent, onPercent] = React.useState(availablePercent);
    const [color, setColor] = React.useState('#000');

    React.useEffect(() => {
        const activeAcct = account.list.find((acct: IAccountInfo) => acct.id === account.activeId);
        onChangeColor();
        if(!activeAcct) {
            alert('Error-x226: Account selection failed');
            availablePercent = 0;
            return;
        }

        const usedPercent = activeAcct.splits.reduce((accumulator: number, split: ISplitInfo) => accumulator + (split.percentage || 0), 0);
        availablePercent = 100 - usedPercent;
    }, [])

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
                                onPercent(val);
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
                <View>
                    <Text style={styles.inputLabel}></Text>
                    <Pressable style={[styles.input, styles.createBtn]}>
                        <Text style={styles.createBtnText}>Create +</Text>
                    </Pressable>
                </View>
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
        width: '18%',
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

    createBtn: {
        backgroundColor: CONST_APP_COLOR_LIGHT_BG,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: CONST_APP_COLOR_LIGHT_BG_GOLDEN,
        borderWidth: 5
    },
    createBtnText: {
        color: CONST_APP_COLOR_LIGHT_FG,

    }
})

const mapState = (state: IState): ISplitAddFormState => ({
    account: state.account
});
const mapDispatch = (dispatch: Dispatch): ISplitAddFormDispatch => ({});

const SplitAddForm = connect(mapState, mapDispatch)(SplitAddFormView);
export default SplitAddForm;