import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyBcif7ajVL_QPA4FS8gu9Bk_l2NtFlwx-A',
			authDomain: 'manager-7cc7f.firebaseapp.com',
			databaseURL: 'https://manager-7cc7f.firebaseio.com',
			projectId: 'manager-7cc7f',
			storageBucket: 'manager-7cc7f.appspot.com',
			messagingSenderId: '743336211821'
		};
		firebase.initializeApp(config);
	}

	// 2nd arg in createStore is for an initial property
	// 3rd arg is a store enhancer --> adding additional functionality to store in
	// provider
	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
