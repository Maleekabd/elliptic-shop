import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataById = createAsyncThunk("fetchDataById", async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
});

const fetchDataByIdSlice = createSlice({
  name: "fetchDataById",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDataById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(fetchDataById.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.rejected = action.error.message;
      });
  },
});

export default fetchDataByIdSlice.reducer;
