import React from "react";
import {
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import logo from "../../assets/img/logo.jpg";

import { Link } from "react-router-dom";

import "./styles.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__content">
          <div className="footer__wrapper-actions">
            <div className="footer__logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="footer__wrapper-icons">
              <ul>
                <li>
                  <FacebookOutlined />
                </li>
                <li>
                  <InstagramOutlined />
                </li>

                <li>
                  <TwitterOutlined />
                </li>

                <li>
                  <YoutubeOutlined />
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__wrapper">
            <div className="footer__wrapper-text">
              <h5>© Copyright 2022 All rights reserved.</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
