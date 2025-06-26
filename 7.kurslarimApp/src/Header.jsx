import React, { useState } from "react";
import "./css/Header.css";
function Header() {
  const [headerElements, setHeaderElements] = useState([
    "header1",
    "header2",
    "header3",
  ]);

  return (
    <div className="header">
      <div className="title">Yemek Kurslarim</div>
      <div className="elements">
        {headerElements.map((element, index) => {
          return (
            <a className="element" key={index} href="#">
              <span>{element}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
