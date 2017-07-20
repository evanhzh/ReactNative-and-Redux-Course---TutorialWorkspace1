import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
	componentWilMount() {
		this.props.employeesFetch();
	}

	renderItem({ item }) {
		return <ListItem employee={item} />;
	}
	render() {
		return (
			<FlatList data={this.props.employees} renderItem={this.renderItem} />
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});

	return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
