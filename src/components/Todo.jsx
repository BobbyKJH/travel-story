import React, { useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const List = () => {
    setTodoList([todo, ...todoList]);
  };

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <input type="text" value={todo} onChange={handleTodo} />
      <button onClick={List}>추가</button>
      {todo}
      <li style={{ display: "block", padding: "10px", width: "100px" }}>
        {todoList}
      </li>
    </div>
  );
}
