import * as Action from 'redux/actions/bannerAction'
const initialState = {
   banner: [],
}

export const bannerReducer = (state = initialState, action) => {
   switch (action.type) {
      case Action.GET_BANNER_SUCCESS:
         return {
            ...state,
            banner: action.payload,
         }
      default:
         return state
   }
}
