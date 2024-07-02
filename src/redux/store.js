import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./FetchDataStore/fetchDataReducer";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
