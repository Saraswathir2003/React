import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    toggleTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
