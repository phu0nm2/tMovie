import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

export const tmdbApi = {
  getMovieList: (type) => {
    const url = `movie/${movieType[type]}`;
    return axiosClient.get(url, {
      params: { page: 1 },
    });
  },

  getTvList: (type) => {
    const url = `tv/${tvType[type]}`;
    return axiosClient.get(url, {
      params: { page: 1 },
    });
  },

  // getTvList: (type, params) => {
  //   const url = "tv/" + tvType[type];
  //   return axiosClient.get(url, params);
  // },

  getVideos: (id) => {
    const url = `movie/${id}/movies`;
    return axiosClient.get(url, {
      params: {
        movie_id: id,
      },
    });
  },

  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },

  // detail: (cate, id, params) => {
  //   const url = category[cate] + "/" + id;
  //   return axiosClient.get(url, params);
  // },

  detail: (id) => {
    const url = `movie/${id}`;
    return axiosClient.get(url, {
      params: {
        movie_id: id,
      },
    });
  },

  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },

  // similar: (cate, id) => {
  //   const url = category[cate] + "/" + id + "/similar";
  //   return axiosClient.get(url, { params: {} });
  // },

  similar: (id) => {
    const url = `movie/${id}/similar`;
    return axiosClient.get(url, {
      params: {
        movie_id: id,
      },
    });
  },
};
