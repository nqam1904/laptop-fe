import * as Action from 'redux/actions/laptopAction'
const initialState = {
	listLaptop: [],
	laptopByCategory: [],
	detailLaptop: []
}

export const laptopReducer = (state = initialState, action) => {
	switch (action.type) {
		case Action.GET_LIST_LAPTOP_SUCCESS:
			return {
				...state,
				listLaptop: action.payload,
			}
		case Action.GET_LAPTOP_BY_CATE_SUCCESS:
			return {
				...state,
				laptopByCategory: action.payload,
			}
		case Action.GET_LAPTOP_BY_PRICE_SUCCESS:
			return {
				...state,
				laptopByCategory: action.payload,
			}

		case Action.GET_DETAIL_LAPTOP_SUCCESS:
			return {
				...state,
				detailLaptop: action.payload
			}
		default:
			return state;
	}
}
