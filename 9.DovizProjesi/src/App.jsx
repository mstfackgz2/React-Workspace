import Currency from "../components/Currency";
import "./App.css";

function App() {
  return (
    <>
      <div
        className="app"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Currency />
      </div>
    </>
  );
}

export default App;
