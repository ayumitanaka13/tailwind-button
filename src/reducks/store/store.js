import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";

import { UsersReducer } from "../users/reducers";
import { PostsReducer } from "../posts/reducers";

const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      posts: PostsReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
};

export default createStore;
