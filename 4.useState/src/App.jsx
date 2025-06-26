import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//useState bazi degerlerin defaultta atanmasini saglar.

function App() {
  //Burasi her renderda calisir
  const [names, setNames] = useState(["John", "Jane", "Bob", "Alice"]);

  return (
    <>
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
