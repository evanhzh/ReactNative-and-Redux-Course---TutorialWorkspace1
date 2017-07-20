import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button } from './components/common';
import LoginForm from './components/LoginForm';

//does not need path to index.js.. default is there.
class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBQ1xSDFL65pcWyb-KjVnOHeQ2Cl3D-XVs',
			authDomain: 'auth-290cb.firebaseapp.com',
			databaseURL: 'https://auth-290cb.firebaseio.com',
			projectId: 'auth-290cb',
			storageBucket: 'auth-290cb.appspot.com',
			messagingSenderId: '752190434629'
		});

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<View style={styles.centerSpinner}>
						<Spinner size="large" />
					</View>
				);
		}
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />

				<View style={styles.centerForm}>
					{this.renderContent()}
				</View>
			</View>
		);
	}
}

const styles = {
	centerSpinner: {
		justifyContent: 'center',
		marginTop: 200
	}
};
export default App;
