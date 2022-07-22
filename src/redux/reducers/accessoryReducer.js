import * as Action from 'redux/actions/accessoryAction'
const initialState = {
   accessory: [],
}

export const accessoryReducer = (state = initialState, action) => {
   switch (action.type) {
      case Action.GET_ACCESSORY_SUCCESS:
         return {
            ...state,
            accessory: action.payload,
         }
      default:
         return state
   }
}
