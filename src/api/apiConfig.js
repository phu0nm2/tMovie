const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  //   baseUrl: "https://ga-mobile-api.loklok.tv/cms/app/",

  apiKey: "2d3c0e48181d8409bcddbddce85076a6",
  originalImage: (imgPath) =>
    `https://image.tmdb.org/t/p/w500/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
