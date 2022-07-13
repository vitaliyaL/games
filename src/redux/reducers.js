import { actionTypes } from "./actions";

const initialState = {
  count: 0,
};
export const reducerCount = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
      case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
      default:
        return state
  }
};

