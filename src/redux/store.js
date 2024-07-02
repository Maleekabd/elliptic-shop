import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./FetchDataStore/fetchDataReducer";
import dataByIdReducer from "./FetchDataStore/fetchDataReducerById";

const store = configureStore({
  reducer: {
    data: dataReducer,
    fetchDataById: dataByIdReducer,
  },
});

export default store;
