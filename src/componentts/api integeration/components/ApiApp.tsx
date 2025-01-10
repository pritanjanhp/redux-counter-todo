import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/TodoApiSlice";
import { AppDispatch, RootState } from "../../../app/store";
import styles from "./apiapp.module.css";
import { useEffect } from "react";

const ApiApp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError } = useSelector(
    (state: RootState) => state.todoApi
  );

  //   useEffect(() => {
  //     dispatch(fetchTodos());
  //   }, [dispatch]);
  console.log(data);

  if (isLoading) {
    console.log("loading...");
    return <h1>Loading....</h1>;
  }
  if (isError) {
    console.log("error...");
    return <h2>Error fetching todos:{isError}</h2>;
  }

  return (
    <div>
      <h2>Fetching Api data using Redux Thunk</h2>

      {data?.length > 0 ? (
        <ul>
          {data.map((item) => (
            <div key={item.id}>
              <form className={styles.dataForm}>
                <li>{item.id}</li>
                <li>{item.title}</li>
              </form>
            </div>
          ))}
        </ul>
      ) : (
        <>
          <p>No todos to display</p>
          <button className={styles.btn} onClick={() => dispatch(fetchTodos())}>
            Fetch Todos
          </button>
        </>
      )}
    </div>
  );
};

export default ApiApp;
