import * as Action from 'redux/actions/laptopAction'
import _ from "lodash"
const initialState = {
	listLaptop: [],
	laptopByCategory: [],
	detailLaptop: [],
	searchProduct: [],
	storageProduct: []
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
		case Action.GET_PRODUCT_VIEW_SUCCESS:
			const arr = [...action.payload]
			return {
				...state,
				storageProduct: _.uniqBy(state.storageProduct.concat(arr), function (e) {
					return e?.slug;
				}).filter(x => x != null)
			}
		default:
			return state;
	}
}
