import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import organization from './organization'

const rootReducer = (state, action) => {
  switch(action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      };
  }

  return combineReducers({
    organization
  })(state,action)
}

export default rootReducer;
