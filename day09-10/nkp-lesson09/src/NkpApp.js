import React from "react";
import NkpUseState from "./components/NkpUseState";
import NkpUseStateListObject from "./components/NkpUseStateListObject";
import NkpEffect1 from "./components/NkpEffect1";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1> Nguyễn Khánh Phong - React Hook</h1>
      <NkpUseState />
      <NkpUseStateListObject />
      <NkpEffect1 />
    </div>
  );
};

export default App;