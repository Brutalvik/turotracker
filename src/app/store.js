import { configureStore } from "@reduxjs/toolkit";
import logicReducer from "app/reducers/logicReducer";

export const store = configureStore({
  reducer: {
    logic: logicReducer,
  },
});
