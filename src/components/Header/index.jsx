import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/img/logo.jpg";
import { Button, OutlineButton } from "../Button";
import { fetchSearchMovie } from "../../store/actions/movie";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logOut } from "../../store/actions/user";

import { SearchOutlined } from "@ant-design/icons";

import "./style.scss";
const Header = () => {
  const { currentUser, isLogin } = useSelector((state) => state.user);
  const [keywords, setKeywords] = React.useState("");

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

  const handleLogOut = () => {
    if (currentUser) {
      dispatch(logOut());
    }
  };

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
    <>
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
                className="header__actions-input"
                placeholder="Search..."
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
              <div className="header__actions-btn">
                <SearchOutlined />
              </div>
            </form>
          </div>

          <ul className="header__nav">
            <Link to="/">
              <div className="header__nav-home">Home</div>
            </Link>

            {isLogin ? (
              <div className="header__user">
                <div className="header__user--profile">
                  {currentUser?.photoURL ? (
                    <img src={currentUser?.photoURL} alt="avatar" />
                  ) : (
                    <img
                      className="avatar-default"
                      src={logo}
                      alt="avatar-default"
                    />
                  )}

                  <span>{currentUser?.displayName}</span>
                </div>

                <div className="header__user--logout">
                  <OutlineButton onClick={handleLogOut}>Log out</OutlineButton>
                </div>
              </div>
            ) : (
              <Link to="/signin">
                <Button>Sign In</Button>
              </Link>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
