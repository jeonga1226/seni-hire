import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import offer from "./offer";

const offerReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
  }

  return combineReducers({ offer })(state, action);
};

export default offerReducer;
