import React from "react";
import { View, Text} from "react-native";
import { Route } from "react-router-native";
import Accounts from "../../pages/accounts/Accounts";
import Home from "../../pages/home/Home";

const Content = () => {
    return (
        <View>
            <Route exact path="/" component={Home} />
            <Route exact path="/ac" component={Accounts} />
        </View>
    );
}

export default Content;