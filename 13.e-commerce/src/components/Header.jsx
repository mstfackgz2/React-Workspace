import { useState } from "react";
import "../css/Header.css";
import { MdDarkMode } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const chanegeTheme = () => {
    const root = document.querySelector(":root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };
  return (
    <div className="header">
      <div className="header-logo">
        <img
          onClick={() => navigate("/")}
          className="logo"
          src="./src/images/logo.png"
          alt=""
        />
        <p className="logo-text">Gel Bak Al</p>
      </div>

      <div className="header-search">
        <input
          className="search-input"
          placeholder="Aramak icin bi seyler yaz"
          type="text"
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="icon-wrapper">
            {theme ? (
              <MdDarkMode onClick={chanegeTheme} className="icon" />
            ) : (
              <IoIosSunny onClick={chanegeTheme} className="icon" />
            )}
          </div>

          <div className="icon-wrapper">
            <Badge
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={products.length}
              color="secondary"
              onClick={() => dispatch(setDrawer())}
            >
              <FaBasketShopping className="icon" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
