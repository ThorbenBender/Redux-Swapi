import * as types from /* we need our action types here*/ "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case types.FETCHING:
      return {
        ...state,
        fetching: true,
      }
    case types.SUCCESS: 
      return {
        ...state,
        characters: action.payload,
        fetching: false,
      }
    case types.FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
};
