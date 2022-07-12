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
  // getMovieList: (type, params) => {
  //   const url = "movie/" + movieType[type];
  //   return axiosClient.get(url, params);
  // },

  getMoviePopular: (params) => {
    const url = "movie/popular";
    return axiosClient.get(url, params);
  },

  getMoviesTopRated: (params) => {
    const url = "movie/top_rated";
    return axiosClient.get(url, params);
  },

  getMoviesUpComing: (params) => {
    const url = "movie/upcoming";
    return axiosClient.get(url, params);
  },

  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },

  getVideos: (id) => {
    const url = "movie/" + id + "/videos";
    return axiosClient.get(url, {
      params: {
        movie_id: id,
      },
    });
  },

  search: (params) => {
    const url = `search/multi?keywords=${params}`;
    return axiosClient.get(url, params);
  },

  detail: (id) => {
    const url = "movie/" + id;
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

  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },

  // getTvList: (type) => {
  //   const url = `tv/${tvType[type]}`;
  //   return axiosClient.get(url, {
  //     params: { page: 1 },
  //   });
  // },

  // similar: (id) => {
  //   const url = `movie/${id}/similar`;
  //   return axiosClient.get(url, {
  //     params: {
  //       movie_id: id,
  //     },
  //   });
  // },

  // getVideos: (id) => {
  //   const url = `movie/${id}/movies`;
  //   return axiosClient.get(url, {
  //     params: {
  //       movie_id: id,
  //     },
  //   });
  // },

  // detail: (id) => {
  //   const url = `movie/${id}`;
  //   return axiosClient.get(url, {
  //     params: {
  //       movie_id: id,
  //     },
  //   });
  // },
};
