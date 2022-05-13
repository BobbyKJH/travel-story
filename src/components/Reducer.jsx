import React, { useState } from "react";

export default function Reducer() {
  const [count, setCount] = useState(initialCount);

  const initialCount = 0;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}
