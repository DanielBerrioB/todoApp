import { createStore } from "redux";
import reducers from "./reducer";
import initalState from "./initialState.json";

export default createStore(reducers, initalState);
