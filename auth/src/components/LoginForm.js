import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	//clear out error on screen
	//clear out the form/ reset state
	//update state object
	//error here is for client side validation
	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication failed',
			loading: false
		});
	}

	//this.onButtonPress.bind(this) is the same as () => this.onButtonPress
	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}

		return <Button onPress={this.onButtonPress.bind(this)}>Login Form</Button>;
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						autoCapitalize={'none'}
						placeholder="Enter your email"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input
						autoCapitalize={'none'}
						secureTextEntry
						placeholder="Enter your password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.setState.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};
export default LoginForm;
