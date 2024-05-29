import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../img/shared/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState(window.location.hash);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => setActiveLink(window.location.hash);
    window.addEventListener("hashchange", handleLocationChange);
    return () => window.removeEventListener("hashchange", handleLocationChange);
  }, []);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <section className="header">
      <img src={logo} className="logo" alt="Logo" />
      <button
        className={`mobile-nav ${navVisible ? "close-nav" : ""}`}
        aria-controls="nav-container"
        aria-expanded={navVisible}
        onClick={toggleNav}
      >
        <span className="sr-only"></span>
      </button>
      <div className={`nav-container ${navVisible ? "visible" : ""}`}>
        <div className="elements">
          <Link to="/" className={activeLink === "#/" ? "active" : ""}>
            00 HOME
          </Link>
          <Link
            to="/destination"
            className={activeLink === "#/destination" ? "active" : ""}
          >
            01 DESTINATION
          </Link>
          <Link to="/crew" className={activeLink === "#/crew" ? "active" : ""}>
            02 CREW
          </Link>
          <Link
            to="/technology"
            className={activeLink === "#/technology" ? "active" : ""}
          >
            03 TECHNOLOGY
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
