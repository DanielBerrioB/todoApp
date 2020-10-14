import initialState from "./initialState.json";
import actions from "./actions";

export default (state = initialState.toDoList, action) => {
  switch (action.type) {
    case actions.ADD_TASK:
      return state.push(action.payload);
    case actions.UPDATE_TASK:
      const element = state.find((e) => e.id === action.payload);
      const newState = state;
      newState[newState.indexOf(element)] = action.payload;
      return newState;
    case actions.REMOVE_TASK:
      state.filter((e) => e.id !== action.payload);
      return state;
    default:
      return state;
  }
};
