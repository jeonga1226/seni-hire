import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import orgReducer from "./organization";
import offerReducer from "./offer";
import userReducer from "./user";

const makeStore = (context) =>
  configureStore({
    reducer: {
      orgReducer,
      offerReducer,
      userReducer,
    },
  });

export const wrapper = createWrapper(makeStore, {});
