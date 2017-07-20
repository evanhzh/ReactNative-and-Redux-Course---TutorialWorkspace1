import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//functional component
//use view tag to kee the indicator center
const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={size || 'large'} />
		</View>
	);
};

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};
//flex 1 for full length
//export statement
export { Spinner };
