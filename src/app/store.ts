import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todo-redux/features/TodoSlice.tsx";
import counterReducer from "../counter/features/CounterSlice.tsx";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
