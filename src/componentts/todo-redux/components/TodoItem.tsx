import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../features/TodoSlice";
import styles from "./todoItem.module.css";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<item> = ({ id, text, completed }) => {
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
    if (completed) return;
    if (isEdit) {
      const updateTodo = {
        id,
        text: newText,
        completed
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
        gap: "10px"
        // textAlign:'center'
      }}
    >
      {/* <li> */}
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <span
        className={styles.text}
        style={{ textDecoration: completed ? "line-through" : "none" }}
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
        <button
          onClick={handleRemove}
          style={{
            backgroundColor: "transparent",
            fontSize: "25px",
            border: "none"
          }}
        >
          <MdDeleteOutline />
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "25px"
          }}
          onClick={handleEdit}
        >
          {/* {isEdit ? "Save" : "Edit"} */}
          {isEdit ? <TiTickOutline /> : <CiEdit />}
        </button>
      </div>
      {/* </li> */}
    </div>
  );
};

export default TodoItem;
