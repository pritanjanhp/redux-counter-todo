import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../componentts/todo-redux/features/TodoSlice.tsx";
import counterReducer from "../componentts/counter/features/CounterSlice.tsx";
import todoApiReducer from "../componentts/api integeration/features/TodoApiSlice.tsx";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
    todoApi: todoApiReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
