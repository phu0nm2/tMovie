import axiosClient from "./axiosClient";

export const tmdbApiUser = {
  getRequestToken: (token) => {
    const url = "authentication/token/new";
    return axiosClient.get(url, { token });
  },

  signin: ({ username, password, request_token }) => {
    const url = "authentication/token/validate_with_login";
    return axiosClient.post(
      url,
      {
        username,
        password,
      },
      {
        headers: {
          Authorization: "Bearer" + request_token,
        },
      }
    );
  },
};
