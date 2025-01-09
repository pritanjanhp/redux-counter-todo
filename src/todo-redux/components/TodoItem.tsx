import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../features/TodoSlice";
import styles from "./todoItem.module.css";
import { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<item> = ({ id, text }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(text);

  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeTodo(id));
  };
  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = () => {
    if (isEdit) {
      const updateTodo = {
        id,
        text: newText,
        completed: true
      };
      dispatch(editTodo(updateTodo));
    }
    setIsEdit(!isEdit);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        gap:'10px'
        // textAlign:'center'
      }}
    >
      {/* <li> */}
      <span
        className={styles.text}
        // style={{ textDecoration: completed ? "line-through" : "none" }}
        onClick={handleToggle}
      >
        {isEdit ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            autoFocus
            className={styles.edit}
          />
        ) : (
          text
        )}
      </span>
      <div className={styles.btnGap}>
        <button className={styles.btn} onClick={handleRemove}>
          Delete
        </button>
        <button className={styles.btn} onClick={handleEdit}>
          {/* Edit */}
          {isEdit ? "Save" : "Edit"}
        </button>
      </div>
      {/* </li> */}
    </div>
  );
};

export default TodoItem;
