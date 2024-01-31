import { configureStore } from "@reduxjs/toolkit";
import breathReducer from "./reducer.js";

const store = configureStore({
  reducer: {
    breath: breathReducer,
  },
});

export default store;
