import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { connect } from 'react-redux';
import { IState } from '../../../redux/IState';
import { CONST_APP_COLOR_INFO, CONST_APP_COLOR_LIGHT_BG, CONST_APP_COLOR_LIGHT_BG_GOLDEN } from '../../constants/const_app';
import EditSvg from '../../svg/EditSvg';
import InfoSvg from '../../svg/InfoSvg';
import { IStateAccount } from '../accounts/store/reducerAccount';
import { IAccountInfo, ISplitInfo } from '../accounts/types';
import CustomizeSplitModal from './modal/CustomizeSplitModal';
import SplitsList from './partials/SplitsList';

interface ISplitsState {
    account: IStateAccount;
};
interface ISplitsProps extends ISplitsState {};

const SplitsView: React.FC<ISplitsProps> = ({account}) => {
    const activeAccount: IAccountInfo | undefined = account.list.find((acct: IAccountInfo) => acct.id === account.activeId);
    const splits: ISplitInfo[] = activeAccount ? activeAccount.splits : [];
    const [openCustomizeModal, setOpenCustomizeModal] = React.useState<boolean>(false);
    const showSplitsInfo = () => {
        Alert.alert("What are account splits?", "These are like small pockets which represents your splitted category. Each split 'Sn' takes an 'x' percentage(%) as a value, so when you add money 'y' into your account, 'x'% of amount 'y' is funneled into your pocket (split 'Sn')");
    }

    if(!activeAccount) {
        return (
            <View>
                <Text>Account selection in progress</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CustomizeSplitModal open={openCustomizeModal} onModalSwitch={setOpenCustomizeModal}/>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Splits</Text>
                <Pressable onPress={showSplitsInfo}>
                    <View>
                        <InfoSvg width={20} height={20} color={CONST_APP_COLOR_INFO}/>
                    </View>
                </Pressable>
            </View>
            <Pressable onPress={showSplitsInfo}>
                <View style={styles.accountInfoCont}>
                    <Text style={styles.accountName}>{activeAccount.title}</Text>
                    <Text style={styles.accountEdit}>Edit</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => setOpenCustomizeModal(true)} style={styles.floatingCustomize}>
                <EditSvg width={20} height={20} />
            </Pressable>
            <SplitsList account={activeAccount} splits={splits}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: '100%',
        padding: 15
    },
    accountInfoCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    accountName: {
        fontSize: 18,
    },
    accountEdit: {
        marginLeft: 10,
        fontSize: 10,
        textDecorationLine: 'underline',
        color: CONST_APP_COLOR_INFO
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
    },
    floatingCustomize: {
        position: 'absolute',
        top: 10,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: CONST_APP_COLOR_LIGHT_BG_GOLDEN,
        backgroundColor: CONST_APP_COLOR_LIGHT_BG
    }

});

const mapState = (state: IState): ISplitsState => ({
    account: state.account
});

const Splits = connect(mapState, null)(SplitsView);

export default Splits;