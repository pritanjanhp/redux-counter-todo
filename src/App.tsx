import { Route, Routes } from "react-router-dom";
import "./App.css";
import Button from "./button/Button.tsx";
import Counter from "./counter/components/Counter.tsx";
import TodoList from "./todo-redux/components/TodoApp.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Button />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<TodoList />}></Route>
    </Routes>
  );
};

export default App;

// steps
// create store
// wrap app compont under provider in main.jsx (so that the store will be availble to every component)
// create slice
// register reducer in store

// npx create-react-app my-app --template redux-typescript


