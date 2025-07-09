import React, { useState } from "react";
import "../css/Header.css";
import { MdDarkMode } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";

function Header() {
  const [theme, setTheme] = useState(true);

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
        <img className="logo" src="./src/images/logo.png" alt="" />
        <p className="logo-text">Aramaci A.S.</p>
      </div>

      <div className="header-search">
        <input
          className="search-input"
          placeholder="Aramak icin bi seyler yaz"
          type="text"
        />

        <div>
          {theme ? (
            <MdDarkMode onClick={chanegeTheme} className="icon" />
          ) : (
            <IoIosSunny onClick={chanegeTheme} className="icon" />
          )}

          <FaBasketShopping className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
