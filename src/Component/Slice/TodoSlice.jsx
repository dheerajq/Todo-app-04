import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: "",
    data: [],
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    addValue: (state, action) => {
      state.data = [...state.data,action.payload]
    },
  },
});

export const { setValue, addValue } = todoSlice.actions;
export default todoSlice.reducer;
