import React from "react";
import { useReducer, useState } from "react";
import Student from "./Student";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (value) => value.id !== action.payload.id
        ),
      };
      case "mark-student":
        return {
            count: state.count,
            students: state.students.map(item => {
                if(item.id === action.payload.id) {
                    return {...item, isHere: !item.isHere}
                }
                return item;
            })
        }
    default:
      return state;
  }
};

const initState = {
  count: 0,
  students: [],
};

function AttendTest() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-student", payload: { name } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((item) => {
        console.log(item.name);
        return (
          <Student
            key={item.id}
            name={item.name}
            dispatch={dispatch}
            id={item.id}
            isHere={item.isHere}
          />
        );
      })}
    </div>
  );
}

export default AttendTest;
