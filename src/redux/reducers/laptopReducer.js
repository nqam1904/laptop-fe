import * as Action from 'redux/actions/laptopAction'
const initialState = {
	listLaptop: [],
	laptopByCategory: [],
	detailLaptop: [],
	searchProduct: [],
	storageProduct: [],
	category: []
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
		case Action.SEARCH_PRODUCT_SUCCESS:
			return {
				...state,
				searchProduct: action.payload
			}
		case Action.GET_CATEGORY_SUCCESS:
			return {
				...state,
				category: action.payload
			}
		default:
			return state;
	}
}
