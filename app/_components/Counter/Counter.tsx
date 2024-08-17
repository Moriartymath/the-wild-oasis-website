"use client";

import { useState } from "react";

type CounterProps = {
  users: [];
};

function Counter({ users }: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>There is {users.length} users</h2>
      <button onClick={() => setCount((curr) => curr + 1)}>{count}</button>;
    </div>
  );
}

export default Counter;
