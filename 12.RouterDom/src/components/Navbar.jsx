import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Anasayfa
      </Link>
      <Link className="link" to="/products">
        Urunlerimiz
      </Link>
      <Link className="link" to="/about">
        Hakkinda
      </Link>
      <Link className="link" to="/contact">
        Iletisim
      </Link>
    </div>
  );
}

export default Navbar;
