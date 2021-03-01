import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar as AndroidStatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NativeRouter, Route, Link } from "react-router-native";
import TopNav from './src/layout/topNav/TopNav';
import Content from './src/layout/content/Content';
import FootNav from './src/layout/footNav/FootNav';

export default function App() {
	return (
		<Provider store={store}>
			<NativeRouter>
				<SafeAreaView style={styles.container}>
					<TopNav/>
					<Content/>
					<FootNav/>
					<StatusBar style="auto" />
				</SafeAreaView>
			</NativeRouter>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? AndroidStatusBar.currentHeight : 0,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
