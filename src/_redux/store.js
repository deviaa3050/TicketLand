import { createStore, combineReducers, applyMiddleware } from "redux";

// import articles from "../_reducers/article";
// import user from "../_reducer/user";
import auth from "../_reducer/auth";

import train from "../_reducer/train";

import ticket from "../_reducer/ticket";

import { logger, promise } from "../middleware/index";

// Global state
const rootReducers = combineReducers({
  auth,
  train,
  ticket
  //   user
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
