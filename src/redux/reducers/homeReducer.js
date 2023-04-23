import * as Actions from 'redux/actions/homeAction'
const initialState = {
	listLaptop: [],
}
export const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_LIST_LAPTOP_HOME_SUCCESS:
			return {
				...state,
				listLaptop: action.payload,
			}
		default:
			return state
	}
}
