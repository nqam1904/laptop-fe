import * as Action from 'redux/actions/laptopAction'
const initialState = {
	listLaptop: [],
}

export const laptopReducer = (state = initialState, action) => {
	switch (action.type) {
		case Action.GET_LIST_LAPTOP_SUCCESS:
			return {
				...state,
				listLaptop: action.payload,
			}
		default:
			return state
	}
}
