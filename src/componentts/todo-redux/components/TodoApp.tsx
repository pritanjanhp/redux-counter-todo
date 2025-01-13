import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <>
      <div style={{textAlign:'center'}}>
        <h2>Todo using redux</h2>
        <AddTodo />
      </div>
      <TodoList />
    </>
  );
};

export default TodoApp;
