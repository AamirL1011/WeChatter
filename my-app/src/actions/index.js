export const addMsg = msg => {
	console.log('addMsg action called:', msg);
	return {
		type: 'ADD_MESSAGE',
		message: msg
	};
};

export const delMsg = id => {
	console.log('delMsg action called with id:', id);
	return {
		type: 'DELETE_MESSAGE',
		id: id
	};
};

export const changePageState = val => {
	console.log('changePageState action called with state:', val);

	if (val) {
		console.log("home selected");
		return {
			type: 'HOME_PAGE_SELECTED'
		};
	} else {
		console.log("about selected");
		return {
			type: 'ABOUT_PAGE_SELECTED'
		};
	}
};

export const getDetails = id => {
	console.log('getDetails action called with id:', id);
	return {
		type: 'GET_DETAILS',
		id: id
	};
};

export const togglePopup =  val => {
	console.log('togglePopup called');
	return {
		type: 'TOGGLE_POPUP',
		id: val}
};
