import React, { useState } from "react";
import styled from "styled-components";

const ContainerTop = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: black;
  display: flex;
`;
const ContainerBottom = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: pink;
`;

const Button = styled.button`
  width: 150px;
  height: 150px;
  color: blue;
`;

const Answer = styled.div`
  color: white;
`;

const Hello = () => {
  this.setCount.useState(50);
};

const App = () => {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(10);
  const [reset, reset1] = useState(50);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <ContainerTop>
        <Button onClick={() => setCount(count + 1)}>Plus</Button>
        <Answer>{count}</Answer>
        <Button onClick={() => setCount2(count2 - 1)}>Minus</Button>
        <Answer>{count2}</Answer>
        <div>
          <Button onClick={() => reset1(this.count + 3)}>Reset</Button>
        </div>
      </ContainerTop>

      <ContainerBottom>
        {/* <input
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
        /> */}
      </ContainerBottom>
    </>
  );
};

export default App;
