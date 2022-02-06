import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(10);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <div>{count}</div>
      <button onClick={() => setCount2(count2 - 1)}>Minus</button>
      <div>{count2}</div>

      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export default App;
