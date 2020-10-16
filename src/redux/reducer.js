import actions from "./actionsName";

export default (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TASK:
      const searchItems = [...state.search.items];
      searchItems.push(action.payload);
      return {
        toDoList: [...state.toDoList, action.payload],
        search: { items: searchItems },
      };
    case actions.UPDATE_TASK:
      const { previous } = action.payload;
      const element = state.toDoList.find((e) => e.title === previous.title);
      const newStateUpdate = [...state.toDoList];
      const copyStateUpdate = [...state.search.items];
      newStateUpdate[newStateUpdate.indexOf(element)] = action.payload.element;
      if (state.search.items.indexOf(previous) >= 0) {
        copyStateUpdate[state.search.items.indexOf(previous)] =
          action.payload.element;
      }
      return {
        toDoList: newStateUpdate,
        search: { items: copyStateUpdate },
      };
    case actions.REMOVE_TASK:
      const newSearchItems = state.search.items.filter(
        (e) => e.title !== action.payload.title
      );
      const toDoElements = state.toDoList.map((e) =>
        e.title === action.payload.title ? action.payload : e
      );
      return {
        toDoList: toDoElements,
        search: { items: newSearchItems },
      };
    case actions.CHECK_TASK:
      const checkElement = state.toDoList.find(
        (e) => e.title === action.payload.title
      );
      const copyState = state.toDoList.map((e) => {
        return {
          ...e,
          isCompleted: e.title === checkElement.title ? true : e.isCompleted,
        };
      });
      const copySearch = state.search.items.map((e) => {
        return {
          ...e,
          isCompleted: e.title === checkElement.title ? true : e.isCompleted,
        };
      });
      return {
        toDoList: copyState,
        search: { items: copySearch },
      };
    case actions.SEARCH:
      const targetText = action.payload.targetText.toLowerCase();

      let similiarElements = state.toDoList.filter((e) => {
        if (targetText) {
          if (targetText === "completed") {
            return e.isCompleted;
          } else if (targetText === "deleted") {
            return e.isDeleted;
          } else if (targetText === "uncompleted") {
            return !e.isCompleted && !e.isDeleted;
          } else {
            return (
              e.title.toLowerCase().includes(targetText) ||
              e.title.toLowerCase().includes(targetText)
            );
          }
        }
        return false;
      });

      return {
        toDoList: state.toDoList,
        search: {
          items: similiarElements,
        },
      };
    case actions.REPOPULATE:
      return {
        toDoList: state.toDoList,
        search: {
          items: state.toDoList,
        },
      };
    default:
      return state;
  }
};
