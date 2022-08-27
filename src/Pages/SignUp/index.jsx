import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../../HOCs/Layout";
import Header from "../../components/Header";

import { Button, Form, Input } from "antd";
import {
  LockOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

import "./styles.scss";
import { signup } from "../../store/actions/user";

const SignUp = () => {
  const { loading } = useSelector((state) => state.movies);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    if (values.password !== values.passwordConfirm) return;
    const handleRedirect = () => navigate("/signin");
    dispatch(signup(values, handleRedirect));
  };

  const onFinishFailed = (errors) => {
    // console.log("Failed", errors);
  };

  return (
    <>
      <Layout loading={loading}>
        <Header></Header>
        <div className="signup ">
          <Form
            name="normal_signup"
            className="signup__form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="displayName"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Full name"
              />
            </Form.Item>

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
                placeholder="Email"
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

            <Form.Item
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please input your repeat password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password confirm "
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="signup__form-button"
              >
                Sign Up
              </Button>

              <Link className="signup__form-text" to="/signin">
                Sign in now!
              </Link>
            </Form.Item>
          </Form>

          <div className="signup__title">
            <h1>SIGN UP FOR FREE NOW</h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignUp;
