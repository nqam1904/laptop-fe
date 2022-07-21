import * as Action from 'redux/actions/sectionAction'
const initialState = {
   section: [],
}

export const sectionReducer = (state = initialState, action) => {
   switch (action.type) {
      case Action.GET_SECTION_SUCCESS:
         return {
            ...state,
            section: action.payload,
         }
      default:
         return state
   }
}
