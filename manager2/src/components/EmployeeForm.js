import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
	renderPickerItems() {
		const days = [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday'
		];
		return days.map(day => <Picker.Item key={day} label={day} value={day} />);
	}

	render() {
		return (
			<View>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jane Doe"
						value={this.props.name}
						onChangeText={value =>
							this.props.employeeUpdate({ props: 'name', value })}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="000-000-0000"
						value={this.props.phone}
						onChangeText={value =>
							this.props.employeeUpdate({ props: 'phone', value })}
					/>
				</CardSection>

				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.PickerLabelStyle}>Select Shift</Text>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={value =>
							this.props.employeeUpdate({ props: 'shift', value })}
					>
						{this.renderPickerItems()}
					</Picker>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	PickerLabelStyle: {
		fontSize: 18,
		alignSelf: 'center',
		paddingTop: 20
	}
};

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
