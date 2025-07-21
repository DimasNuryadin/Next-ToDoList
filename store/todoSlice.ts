// store/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  list: Todo[];
}

const initialState: TodoState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.list.push(newTodo);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo(state, action: PayloadAction<{ id: number; newText: string }>) {
      const id = +action.payload.id;
      const newText = action.payload.newText;
      const todo = state.list.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
