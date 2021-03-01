import React from "react";
import { View, StyleSheet} from "react-native";
import { Route } from "react-router-native";
import Accounts from "../../pages/accounts/Accounts";
import Home from "../../pages/home/Home";
import utilApp from "../../utils/utilApp";

const Content = () => {
    return (
        <View style={styles.container}>
            <Route exact path="/" component={Home} />
            <Route exact path="/ac" component={Accounts} />
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
        width: '100%',
        height: utilApp.getDimension().contentHeight,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
	},
});


export default Content;