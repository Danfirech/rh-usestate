import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);

  const [subtract, setsubtract] = useState(15);

  const [{ count2, count3 }, setnewcount] = useState({
    count2: 20,
    count3: 30,
  });

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
      </div>
      <div>
        <button onClick={() => setsubtract(subtract - 1)}>-</button>
        <div>{subtract}</div>
      </div>

      <div>
        <button
          onClick={() =>
            setnewcount((currentState) => ({
              ...setnewcount,
              count2: currentState.count2 + 1,
              count3: currentState.count3 + 2,
            }))
          }
        >
          Try Me 1
        </button>
        <div>count 2: {count2}</div>
        <div>count 3: {count3}</div>
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          valie={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
    </>
  );
};

export default App;
