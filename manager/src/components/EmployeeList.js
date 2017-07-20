import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	componentWilMount() {
		this.props.employeesFetch();
		this.createDataSource(this.props);
	}

	createDataSource({ employees }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(employees);
	}

	// renderRow(employee) {
	// 	return <ListItem employee={employee} />;
	// }
	render() {
		return <Text>EmployeeList</Text>;
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});

	return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
