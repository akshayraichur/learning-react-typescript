import React, { useReducer } from "react";

type initialStateType = {
  count: number;
};

// old action state
// type actionState = {
//   // type: string; // having string can be very generic, and we also know that the action type is very specific like inc or dec
//   type: "inc" | "dec" | "reset"; // very specific. It uses a union type which will be allowed only inc or dec
//   payload?: number;
// };

// the below approach is called discriminated unions and is useful in useReducer functions
type UpdateActionState = {
  type: "inc" | "dec";
  payload: number;
};

type ResetActionState = {
  type: "reset";
};
// this is the new action state with update and reset functionality both added.
type actionState = UpdateActionState | ResetActionState;

const initialState = {
  count: 0,
};

const reducer = (state: initialStateType, action: actionState) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + action.payload }; // when we make the payload optional, this shows that payload can be undefined.

    case "dec":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "inc", payload: 10 })}>Increment 10</button>
      <button onClick={() => dispatch({ type: "dec", payload: 10 })}>Decrement 10</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset state</button>
    </div>
  );
};

export default Counter;
