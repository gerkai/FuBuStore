import { Logo } from "../assets";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaHeart, FaUser, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const iconStyle = {
    fontSize: "40",
    color: "black",
    padding: "10",
    margin: "10",
  };

  return (
    <nav className="navbar is-spaced is-transparent ">
      <div className="container">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/" onClick={toggleMenu}>
            <img src={Logo} alt="fubu" width="123" height="64" />
          </NavLink>
          <a
            role="button"
            className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${menuOpen ? "is-active" : ""}`}
        >
          <div className="navbar-start is-uppercase has-text-weight-bold">
            <a className="navbar-item has-text-primary" onClick={toggleMenu}>
              about
            </a>
            <NavLink
              to="/Shop"
              className="navbar-item has-text-primary"
              onClick={toggleMenu}
            >
              shop
            </NavLink>
            <a className="navbar-item has-text-primary" onClick={toggleMenu}>
              contact us
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a onClick={toggleMenu}>
                <FaSearch style={iconStyle} />
              </a>
              <a onClick={toggleMenu}>
                <FaHeart style={iconStyle} />
              </a>
              <a onClick={toggleMenu}>
                <FaUser style={iconStyle} />
              </a>
              <NavLink
                to="/Cart"
                onClick={toggleMenu}
                className="is-hidden-desktop"
              >
                <FaShoppingBag style={iconStyle} />
              </NavLink>

              <NavLink to="/Cart" onClick={toggleMenu}>
                <FaShoppingBag style={iconStyle} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
