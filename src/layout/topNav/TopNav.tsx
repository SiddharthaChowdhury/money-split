import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { CONST_APP_COLOR_LIGHT_BG, CONST_TOP_NAV_HEIGHT } from "../../constants/const_app";

const TopNav = () => {
    return (
        <View style={styles.container}>
            <Text>MONEY SPLIT +</Text>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
        width: '100%',
        height: CONST_TOP_NAV_HEIGHT,
        backgroundColor: CONST_APP_COLOR_LIGHT_BG,
        alignItems: 'center',
        justifyContent: 'center'
	},
});

export default TopNav;