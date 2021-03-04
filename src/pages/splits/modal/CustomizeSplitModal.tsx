import React from "react";
import { Modal, View, Pressable, Text, StyleSheet } from "react-native";
import { CONST_APP_COLOR_INFO } from "../../../constants/const_app";
import { ISplitInfo } from "../../accounts/types";
import SplitAddForm from "../partials/SplitAddForm";
import SplitsList from "../partials/SplitsList";

interface ICustomizeSplitProps {
    open?: boolean;
    onModalSwitch: (status: boolean) => void;
}

const CustomizeSplitModal: React.FC<ICustomizeSplitProps> = ({open, onModalSwitch}) => {
    const [selectedSplit, setSplit] = React.useState<ISplitInfo | undefined>();

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={() => {
                onModalSwitch(!open);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.head}>
                        <Text style={styles.modalText}>Customize splits</Text>
                        <Pressable
                            style={styles.buttonClose}
                            onPress={() => {
                                onModalSwitch(!open)
                                setSplit(undefined);
                            }}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                    <SplitAddForm selectedSplit={selectedSplit}/>
                    <SplitsList onSplitClicked={setSplit}/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '95%',
        height: '85%',
    },
    head: {
        flexDirection: 'row'
    },
    buttonClose: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        marginLeft: 'auto',
        backgroundColor: CONST_APP_COLOR_INFO,
        alignSelf: 'flex-end'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 10,
    },
    modalText: {
        fontSize: 18
    }
});

export default CustomizeSplitModal;