import React from 'react'
import { useState, useReducer } from "react";

const ACTION_TYPES = {
    deposit: "deposit",
    withdraw: "withdraw",
  };
  
  const reducer = (state, action) => {
    console.log("state : ", state);
    console.log("action : ", action);
    switch (action.type) {
      case ACTION_TYPES.deposit:
        return state + action.payload;
      case ACTION_TYPES.withdraw:
        return state - action.payload;
      default:
        return state;
    }
  };

function BankTest() {
    const [money, dispatch] = useReducer(reducer, 0);
    const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>Reducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        step={1000}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: ACTION_TYPES.deposit,
            payload: number,
          });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({
            type: ACTION_TYPES.withdraw,
            payload: number,
          });
        }}
      >
        출금
      </button>
    </div>
  )
}

export default BankTest