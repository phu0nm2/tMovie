import React from "react";
import Header from "../../components/Header";

import {
  LockOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { signin, signinWithGoogle } from "../../store/actions/user";
import Layout from "../../HOCs/Layout";

import "./styles.scss";

const SignIn = () => {
  const { loading } = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const handleRedirect = () => {
      navigate("/");
    };

    dispatch(signin(values, handleRedirect));
  };

  const onFinishFailed = (errors) => {
    console.log("Failed", errors);
  };

  const hanleGoogleSignIn = () => {
    const handleRedirect = () => {
      navigate("/");
    };
    dispatch(signinWithGoogle(handleRedirect));
  };

  const hanleFacebookSignIn = () => {
    //
  };

  return (
    <>
      <Layout loading={loading}>
        <Header></Header>
        <div className="login ">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email..."
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login__form-button"
              >
                Log in
              </Button>

              <Link className="login__form-res" to="/signup">
                Register now!
              </Link>
            </Form.Item>

            <button
              className="login-btn__gg"
              type="button"
              onClick={hanleGoogleSignIn}
            >
              <GooglePlusOutlined />
            </button>

            <button
              className="login-btn__fb"
              type="button"
              onClick={hanleFacebookSignIn}
            >
              <span className="login-btn__fb-custom">f</span>
            </button>
          </Form>

          <div className="login__title">
            <h1>SIGN IN</h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignIn;
