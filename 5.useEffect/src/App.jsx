import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her turlu calisir");
  });
  useEffect(() => {
    console.log("sadece ilk render edildiginde calisir");
  }, []);
  useEffect(() => {
    console.log("ilkr nrender edildiginde ve firstName degistiginde calisirt");
  }, [firstName]);
  useEffect(() => {
    console.log("ilkr nrender edildiginde ve lastName degistiginde calisirt");
  }, [lastName]);
  useEffect(() => {
    console.log(
      "ilkr nrender edildiginde firstName veya lastName degistiginde calisirt"
    );
  }, [firstName, lastName]);

  return (
    <>
      <div>
        <button onClick={() => setFirstName("mustafa")}> adi degistir</button>
        <button onClick={() => setLastName("acikgoz")}> soyadi degistir</button>
      </div>
    </>
  );
}

export default App;
