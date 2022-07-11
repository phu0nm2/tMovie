import axiosClient from "./axiosClient";

export const tmdbApiUser = {
  getRequestToken: (params) => {
    const url = "authentication/token/new";
    return axiosClient.get(url, { params });
  },

  sessionID: ({ username, password, request_token }) => {
    const url = "authentication/token/validate_with_login";
    return axiosClient.post(url, {
      username,
      password,
      request_token,
    });
  },
};
