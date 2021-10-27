import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import clock from "./clock/";
import tree from "./tree/";
const rootReducer = combineReducers({
  clock,
  tree,
})
const store = createStore(rootReducer, {}, applyMiddleware(thunk));
export default store;