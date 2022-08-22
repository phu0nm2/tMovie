import React, { useEffect } from "react";
import "./style.scss";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/img/logo.jpg";
import { Button } from "../Button";
import { fetchSearchMovie } from "../../store/actions/movie";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [keywords, setKeywords] = React.useState("");

  // const [user, setUser] = React.useState(localStorage.getItem("request_token"));
  const headerRef = React.useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {
      query: keywords,
    };

    if (!keywords) {
      return;
    }

    const handleRedirect = () => {
      navigate(`/search`);
    };
    dispatch(fetchSearchMovie({ params }, handleRedirect));
  };

  // useEffect(() => {
  //   const token = user?.request_token;

  //   setUser(localStorage.getItem("request_token"));
  // }, []);

  useEffect(() => {
    const headerFixed = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("header__fixed");
      } else {
        headerRef.current.classList.remove("header__fixed");
      }
    };

    window.addEventListener("scroll", headerFixed);

    return () => {
      window.removeEventListener("scroll", headerFixed);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="header__wrap ">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            tMovies
          </Link>
        </div>

        <div className="header__actions">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="header__form-input"
              placeholder="Search..."
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </form>
        </div>

        <ul className="header__nav">
          <Link to="/">
            <div className="header__nav-home">Home</div>
          </Link>

          {currentUser ? (
            <div>
              <div className="header__user--profile">
                <img src={currentUser.data?.imageUrl} alt="avatar" />
                <span>{currentUser.data?.familyName}</span>
              </div>
            </div>
          ) : (
            <Link to="/signin">
              <Button>Sign in</Button>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
