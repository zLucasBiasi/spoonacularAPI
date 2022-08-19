import { useState } from "react";
import { Recipes } from "./components/Recipes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <Recipes />
    </>
  );
}

export default App;
