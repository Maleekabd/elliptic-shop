import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
