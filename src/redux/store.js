import { createStore, combineReducers } from "redux";
import { reducer, userReducer } from "./reducer";

const rootReducer = combineReducers(reducer, userReducer);
const store = createStore(rootReducer);

export default store;
