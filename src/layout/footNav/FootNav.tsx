import React from "react";
import { View, Text} from "react-native";
import { Link } from "react-router-native";

const FootNav = () => {
    return (
        <View>
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

export default FootNav;