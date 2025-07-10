import { Drawer } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateAmount, setDrawer } from "./redux/slices/basketSlice";
import { useEffect, useState } from "react";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  useEffect(() => {
    dispatch(calculateAmount());
  }, []);
  const dispatch = useDispatch();
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          className="drawer"
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {products &&
            products.map((product) => {
              return (
                <div>
                  <div
                    className="flex-row"
                    style={{ padding: "20px" }}
                    key={product.id}
                  >
                    <img
                      style={{ marginRight: "5px" }}
                      src={product.image}
                      width={50}
                      height={50}
                      alt=""
                    />
                    <p style={{ width: "320px", marginRight: "5px" }}>
                      {product.title}({product.amount})
                    </p>
                    <p style={{ fontWeight: "bold", width: "60px" }}>
                      {product.price} $
                    </p>
                    <button>sil</button>
                  </div>
                </div>
              );
            })}
          <div>toplam tutar : {totalAmount} $</div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
