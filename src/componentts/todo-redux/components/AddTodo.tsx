import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoSlice";
import styles from "./addTodo.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

const AddTodo: React.FC = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") {
      alert("enter todo please");
      return;
    }
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // margin: "20px",
          // padding:'20px',
        }}
      >
        <input
          type="text"
          value={text}
          placeholder="enter your todo here..."
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
        />
        <button
          // className={styles.btn}
          style={{
            border: "none",
            backgroundColor: "transparent",
            display: "flex",
            fontSize: "29px"
            // margin: "-5px",
            // marginBottom: "-20px",
            // marginTop: "20px"
            // padding: "12px"
          }}
          onClick={handleAdd}
        >
          <IoIosAddCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
