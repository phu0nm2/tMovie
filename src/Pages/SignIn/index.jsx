import React from "react";
import Header from "../../components/Header";

import {
  LockOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";

import "./styles.scss";
import { useDispatch } from "react-redux";
import { fetchRequestToken, generateSessionId } from "../../store/actions/user";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../HOCs/Layout";

const SignIn = () => {
  const { loading } = useSelector((state) => state.movies);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // sign up into TMDb is not exposed (sign up in tmbd main website)
  // so we can only log in with a valid account under ur name

  const onFinish = (values) => {
    const handleRedirect = () =>
      navigate(
        `https://www.themoviedb.org/authenticate/${currentUser.request_token}`
      );
    dispatch(fetchRequestToken(values, handleRedirect));
    // // console.log(currentUser.request_token);
    // dispatch(generateSessionId(values));
  };

  const onFinishFailed = (errors) => {
    console.log("Failed", errors);
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
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
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

            {/* <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
              Forgot password
            </a>
            </Form.Item> */}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="/signup">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </Layout>
    </>
  );
};

export default SignIn;
