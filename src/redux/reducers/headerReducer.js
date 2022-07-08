import * as Action from 'redux/actions/headerAction'
const initialState = {
   header: [],
}

export const headerReducer = (state = initialState, action) => {
   switch (action.type) {
      case Action.GET_HEADER_SUCCESS:
         return {
            ...state,
            header: action.payload,
         }
      default:
         return state
   }
}
