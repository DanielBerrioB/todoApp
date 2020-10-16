import actions from "./actionsName";

const addTask = (element) => ({
  type: actions.ADD_TASK,
  payload: element,
});

const checkTask = (element) => ({
  type: actions.CHECK_TASK,
  payload: element,
});

const deleteTask = (element) => ({
  type: actions.REMOVE_TASK,
  payload: element,
});

const editTask = (element, previous) => ({
  type: actions.UPDATE_TASK,
  payload: { element, previous },
});

const searchElement = ({ targetText }) => ({
  type: actions.SEARCH,
  payload: { targetText },
});

const repopulate = () => ({
  type: actions.REPOPULATE,
  payload: [],
});

export default {
  addTask,
  checkTask,
  deleteTask,
  editTask,
  searchElement,
  repopulate,
};
