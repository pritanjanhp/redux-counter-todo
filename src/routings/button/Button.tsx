import { Link } from "react-router-dom";
import style from "./button.module.css";

const Button = () => {
  return (
    <>
      <h2>Created using Redux </h2>
      <Link className={style.btn} to="/counter">
        Counter
      </Link>
      <br />

      <Link className={style.btn} to="todo">
        Todo with redux
      </Link>
      <br />

      <Link className={style.btn} to="api-Integeration">
        API Integeration
      </Link>
    </>
  );
};

export default Button;
