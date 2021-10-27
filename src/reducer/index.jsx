import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import clock from "./clock/";
const rootReducer = combineReducers({
  clock
})
const store = createStore(rootReducer, {}, applyMiddleware(thunk));
export default store;