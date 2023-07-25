import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState: initialState,
  reducers: {
    setTodolist(state, value) {
      console.log(value.payload);
      state.todolist = value.payload;
    },
  },
});

export const { setTodolist } = todoSlice.actions;
export default todoSlice.reducer;
