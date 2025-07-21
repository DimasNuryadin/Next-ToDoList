// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// Types untuk digunakan di seluruh app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
