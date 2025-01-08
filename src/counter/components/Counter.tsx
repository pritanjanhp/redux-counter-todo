import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  decrement,
  increment,
  incrementByAmount,
  reset
} from "../features/CounterSlice";
import { useState } from "react";

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [amt, setAmt] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h3>Counter</h3>
      <h2>count : {counter}</h2>
      <button onClick={handleIncrement}>++</button> <br /> <br />
      <button onClick={handleDecrement}>--</button> <br /> <br />
      <button onClick={() => dispatch(reset())}>reset</button> <br />
      <br />
      <input
        style={{ textAlign: "center" }}
        value={amt}
        onChange={(e) => setAmt(parseInt(e.target.value))}
      />
      <br />
      <br />
      <button onClick={() => dispatch(incrementByAmount(amt))}>
        incremnt by {amt}
      </button>
    </>
  );
};

export default Counter;
