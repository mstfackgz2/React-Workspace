import Product from "./Product";
import "./App.css";
import { Urunler } from "./Urunler";

function App() {
  return (
    <>
      <div>
        {Urunler.map((urun, index) => (
          <Product key={index} {...urun} />
        ))}
      </div>
    </>
  );
}

export default App;
