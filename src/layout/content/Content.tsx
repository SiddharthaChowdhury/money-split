import React from "react";
import { View, StyleSheet} from "react-native";
import { Route } from "react-router-native";
import Accounts from "../../pages/accounts/Accounts";
import Home from "../../pages/home/Home";
import Splits from "../../pages/splits/Splits";
import utilApp from "../../utils/utilApp";

const Content = () => {
    return (
        <View style={styles.container}>
            <Route exact path="/" component={Home} />
            <Route exact path="/ac" component={Accounts} />
            <Route exact path="/splits" component={Splits} />
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
        width: '100%',
        height: utilApp.getDimension().contentHeight,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row'
	},
});


export default Content;