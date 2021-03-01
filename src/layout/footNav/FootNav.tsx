import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { CONST_BOT_NAV_HEIGHT, CONST_APP_COLOR_LIGHT_BG } from "../../constants/const_app";
import AccountsSvg from "../../svg/AccountSvg";
import HistorySvg from "../../svg/HistorySvg";
import HomeSvg from "../../svg/HomeSvg";
import SettingsSvg from "../../svg/SettingsSvg";

const FootNav = () => {
    return (
        <View style={styles.container}>
            <Link
                to="/"
                underlayColor="#f0f4f7"
                style={styles.navItem}
            >
                <View style={styles.menuBtn}>
                    <HomeSvg width={20} height={20}/>
                    <Text style={styles.menuBtnText}>Home</Text>
                </View>
            </Link>
            <Link
                to="/ac"
                underlayColor="#f0f4f7"
                style={styles.navItem}
            >
                <View style={styles.menuBtn}>
                    <AccountsSvg width={20} height={20}/>
                    <Text style={styles.menuBtnText}>Accounts</Text>
                </View>
            </Link>
            <Link
                to="/ac"
                underlayColor="#f0f4f7"
                style={styles.navItem}
            >
                <View style={styles.menuBtn}>
                    <HistorySvg width={20} height={20}/>
                    <Text style={styles.menuBtnText}>History</Text>
                </View>
            </Link>
            <Link
                to="/ac"
                underlayColor="#f0f4f7"
                style={styles.navItem}
            >
                <View style={styles.menuBtn}>
                    <SettingsSvg width={20} height={20}/>
                    <Text style={styles.menuBtnText}>Settings</Text>
                </View>
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

    navItem: {
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        borderRadius: 5
    },
    menuBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuBtnText: {
        marginLeft: 5,
        fontSize: 12
    }
});

export default FootNav;