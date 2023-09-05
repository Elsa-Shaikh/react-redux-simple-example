import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk"; //help to run async functions

export const store = createStore(reducers, {}, applyMiddleware(thunk));


