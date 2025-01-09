import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoState {
  todos: Todo[];
}

let initialState: TodoState = {
  todos: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
      // const newTodo: Todo = {
      //   id: Date.now(),
      //   text: action.payload,
      //   completed: false
      // };
      // state.todos.push(newTodo);
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; 
      }
    },

    editTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    }
  }
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
