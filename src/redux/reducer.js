import actions from "./actionsName";

export default (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TASK:
      return [...state, action.payload];
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
