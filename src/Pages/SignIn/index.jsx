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
import { signin, signinWithGoogle } from "../../store/actions/user";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../HOCs/Layout";

import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const clientId =
  "587789522957-shusdrrn5e4111sl00ucekle0hjbg04h.apps.googleusercontent.com";

const SignIn = () => {
  const { loading } = useSelector((state) => state.movies);
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // sign up into TMDb is not exposed (sign up in tmbd main website)
  // so we can only log in with a valid account under ur name

  const onFinish = (values) => {
    // const handleRedirect = () =>
    //   navigate(
    //     // `https://www.themoviedb.org/authenticate/${currentUser.request_token}`
    //   );
    // dispatch(signin(values, handleRedirect));
    // console.log(currentUser);
  };

  const onFinishFailed = (errors) => {
    console.log("Failed", errors);
  };

  React.useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = async (values) => {
    const handleRedirect = () => {
      navigate("/");
    };

    dispatch(signinWithGoogle(values, handleRedirect));
  };

  const onFailure = (res) => {
    console.log("first err", res);
    console.log("login failure");
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
                // autoComplete="username"
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
                // autoComplete="current-password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              {/* login with google */}
              Or <a href="/signup">register now!</a>
            </Form.Item>
          </Form>
          <GoogleLogin
            disabled={false}
            clientId="587789522957-shusdrrn5e4111sl00ucekle0hjbg04h.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </Layout>
    </>
  );
};

export default SignIn;
