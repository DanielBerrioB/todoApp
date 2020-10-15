import { createStore } from "redux";
import reducers from "./reducer";
import initialState from "./initialState.json";

export default createStore(reducers, initialState);
