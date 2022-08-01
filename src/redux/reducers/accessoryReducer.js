import * as Action from 'redux/actions/accessoryAction'
const initialState = {
   accessory: [],
   accessoryDetail: [],
   accessoryByPrice: [],

}

export const accessoryReducer = (state = initialState, action) => {
   switch (action.type) {
      case Action.GET_ACCESSORY_SUCCESS:
         return {
            ...state,
            accessory: action.payload,
         }
      case Action.GET_ACCESSORY_BY_PRICE_SUCCESS:
         return {
            ...state,
            accessoryByPrice: action.payload,
         }
      case Action.GET_ACCESSORY_DETAIL_SUCCESS:
         return {
            ...state,
            accessoryDetail: action.payload,
         }
      default:
         return state
   }
}
