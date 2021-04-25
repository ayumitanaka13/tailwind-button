import * as Actions from "./actions";
import { initialState } from "../store/initialState";

export const PostsReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    case Actions.SUBMIT_POST:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.DELETE_POST:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
