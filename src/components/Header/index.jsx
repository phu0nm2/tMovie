import React, { useEffect } from "react";
import "./style.scss";

import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.jpg";
import { Button } from "../Button";

const Header = () => {
  const [keyword, setKeyword] = React.useState();
  const headerRef = React.useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="header__wrap ">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/">tMovies</Link>
        </div>

        <div className="header__actions">
          <input
            type="text"
            className="header__form-input"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <ul className="header__nav">
          <Link to="/">
            <div className="header__nav-home">Home</div>
          </Link>
          <Link to="/login">
            <Button>Log in</Button>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
