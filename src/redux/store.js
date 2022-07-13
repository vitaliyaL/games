import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerCount } from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    count: reducerCount,

});
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
