import actions from "./actionsName";

const addTask = (element) => ({
  type: actions.ADD_TASK,
  payload: element,
});

export default {
  addTask,
};
