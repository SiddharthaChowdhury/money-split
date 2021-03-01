import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { CONST_BOT_NAV_HEIGHT, CONST_APP_COLOR_LIGHT_BG } from "../../constants/const_app";

const FootNav = () => {
    return (
        <View style={styles.container}>
            <Link
                to="/ac"
                underlayColor="#f0f4f7"
                // style={styles.navItem}
            >
                <Text>Accounts</Text>
            </Link>
            <Link
                to="/"
                underlayColor="#f0f4f7"
                // style={styles.navItem}
            >
                <Text>Home</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
        width: '100%',
        height: CONST_BOT_NAV_HEIGHT,
        backgroundColor: CONST_APP_COLOR_LIGHT_BG,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
	},
});

export default FootNav;