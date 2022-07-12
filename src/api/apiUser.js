import axiosClient from "./axiosClient";

export const tmdbApiUser = {
  getRequestToken: (params) => {
    const url = "authentication/token/new";
    return axiosClient.get(url, { params });
  },

  sessionID: ({ request_token }) => {
    const url = "authentication/session/new";
    return axiosClient.post(
      url,
      {
        request_token,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};
