import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);

  const [subtract, setsubtract] = useState(15);

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
    </>
  );
};

export default App;
