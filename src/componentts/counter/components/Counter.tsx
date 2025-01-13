import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
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
      <div>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent ",
            fontSize: "25px"
          }}
          onClick={handleIncrement}
        >
          +
        </button>{" "}
        <br /> <br />
        <button
          style={{
            border: "none",
            backgroundColor: "transparent ",
            fontSize: "25px"
          }}
          onClick={handleDecrement}
        >
          -
        </button>{" "}
        <br /> <br />
        <button
          style={{
            border: "none",
            backgroundColor: "transparent ",
            fontSize: "25px"
          }}
          onClick={() => dispatch(reset())}
        >
          reset
        </button>{" "}
        <br />
      </div>
      <br />
      <input
        style={{
          textAlign: "center",
          border: "none",
          backgroundColor: "transparent ",
          fontSize: "15px"
        }}
        value={amt}
        onChange={(e) => setAmt(parseInt(e.target.value))}
      />
      <br />
      <br />
      <button
        style={{
          border: "none",
          // backgroundColor: "transparent ",
          fontSize: "15px"
        }}
        onClick={() => dispatch(incrementByAmount(amt))}
      >
        increment by {amt}
      </button>
    </>
  );
};

export default Counter;
