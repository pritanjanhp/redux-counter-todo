import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoSlice";
import styles from "./addTodo.module.css";

const AddTodo: React.FC = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newdata = {
      id: new Date().getTime(),
      text,
      completed: false
    };
    dispatch(addTodo(newdata));
    setText("");
  };

  return (
    <div>
      {/* <h2>AddTodo</h2> */}
      <div className={styles.container}>
        <input
          type="text"
          value={text}
          placeholder="enter your todo here..."
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
        />
        <button className={styles.btn} onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
