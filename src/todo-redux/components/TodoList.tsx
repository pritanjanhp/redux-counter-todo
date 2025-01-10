import React from "react";
import { RootState } from "../../app/store.ts";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  // console.log(todos);
  return (
    <>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "400px",
          textAlign: "center",
          // border:'2px solid white',
          padding: "10px",
          marginLeft: "20px"
        }}
      >
        {todos?.map((todo) => (
          <>
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
            <div
              style={{ width: "full", borderBottom: "2px solid white" }}
            ></div>
          </>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
