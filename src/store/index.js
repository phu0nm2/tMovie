import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import movies from "./reducers/movie";
import user from "./reducers/user";
// import tvList from "./reducers/tv";

const rootReducer = combineReducers({
  movies,
  user,
  // tvList,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
