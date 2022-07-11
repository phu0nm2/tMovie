import React, { useEffect } from "react";
import "./style.scss";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/img/logo.jpg";
import { Button } from "../Button";
import { fetchSearchMovie } from "../../store/actions/movie";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = () => {
  const { searchMovies } = useSelector((state) => state.movies);
  const [keywords, setKeyword] = React.useState("");

  const headerRef = React.useRef(null);
  // const inputRef = React.useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      query: keywords,
    };

    if (!keywords) {
      return;
    }
    const handleRedirect = () => {
      navigate(`/search`);
      // inputRef.current.focus();
    };
    dispatch(fetchSearchMovie({ params }, handleRedirect));

    // if (keywords.length > 0) {
    //   navigate(`/search?keywords=${keywords.trim()}`);
    //   dispatch(fetchSearchMovie({ params }));
    // }

    // else {
    //   navigate("/");
    // }
  }, [dispatch, keywords, navigate]);

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

  // Can search movies but it's still bug
  // let handleSearch = (e) => {
  //   let keywords = e.target.value;
  //   const params = {
  //     query: keywords,
  //   };

  //   if (keywords.length > 0) {
  //     navigate(`/search?keywords=${keywords.trim()}`);
  //     dispatch(fetchSearchMovie({ params }));
  //   } else {
  //     navigate("/");
  //   }
  //   setKeyword(keywords);
  // };

  return (
    <header ref={headerRef} className="header">
      <div className="header__wrap ">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/">tMovies</Link>
        </div>

        <div className="header__actions">
          <input
            // ref={inputRef}
            type="text"
            className="header__form-input"
            placeholder="Search..."
            value={keywords}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <ul className="header__nav">
          <Link to="/">
            <div className="header__nav-home">Home</div>
          </Link>
          <Link to="/signin">
            <Button>Sign in</Button>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
