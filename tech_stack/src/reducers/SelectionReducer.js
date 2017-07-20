export default (state = null, action) => {
	//default the value state to null if undefined.

	switch (action.type) {
		case 'select_library':
			return action.payload;

		default:
			return state;
	}
};
