import * as Action from 'redux/actions/footerAction'
const initialState = {
   footer: [],
}

export const footerReducer = (state = initialState, action) => {
   switch (action.type) {
      case Action.GET_FOOTER_SUCCESS:
         return {
            ...state,
            footer: action.payload,
         }
      default:
         return state
   }
}
