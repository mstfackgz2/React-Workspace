import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

function App() {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>{value}</h1>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttir</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
    </>
  );
}

export default App;
