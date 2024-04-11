import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import user from "./user";

const userReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
  }

  return combineReducers({ user })(state, action);
};

export default userReducer;
