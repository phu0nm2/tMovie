import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import apiConfig from "../../api/apiConfig";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  fetchMovieDetailById,
  fetchMovieVideoById,
} from "../../store/actions/movie";
import { Tabs } from "antd";
import YouTube from "react-youtube";
// import { EyeTwoTone } from "@ant-design/icons";

import "./styles.scss";

const Detail = () => {
  const { detail } = useSelector((state) => state.movies);
  const { videos } = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { TabPane } = Tabs;

  React.useEffect(() => {
    dispatch(fetchMovieDetailById(id));
  }, [dispatch, detail?.id, id]);

  React.useEffect(() => {
    dispatch(fetchMovieVideoById(id));
  }, [dispatch, id]);

  const renderTrailer = () => {
    const trailer = videos.find((video) => video.name === "Official Trailer");

    return (
      <YouTube
        videoId={trailer?.key}
        className={"video-trailer"}
        opts={{ width: "100%", height: "100%" }}
      />
    );
  };
  const {
    original_title,
    vote_average,
    vote_count,
    release_date,
    overview,
    backdrop_path,
    poster_path,
    genres,
    spoken_languages,
    production_countries,
    homepage,
  } = detail || {};
  return (
    <>
      <Header></Header>
      <div className="detail">
        <div className="detail__bg">
          <img
            src={apiConfig.w500Image(backdrop_path || poster_path)}
            alt="movie detail"
          />
        </div>

        <div className="detail__content">
          <div className="detail__movie">
            <a href={homepage} className="detail__movie-img">
              <img
                className="detail__movie-img-img"
                src={apiConfig.w500Image(
                  poster_path ? poster_path : backdrop_path
                )}
                alt="hinh anh"
              />
            </a>

            <div className="detail__movie-wrap">
              <h1 className="detail__movie-name">{original_title}</h1>
              <div className="detail__movie-genres">
                {genres?.map((item) => (
                  <span key={item.id}>{` ${item.name} `}</span>
                ))}
              </div>

              <div className="detail__movie-decription">{overview}</div>

              <div className="detail__rate">
                <div className="detail__rate-rating">
                  Reating: {Math.floor(vote_average)}/10
                </div>
                <div className="detail__rate-date">Date: {release_date}</div>
                <div>Vote Count: {vote_count}</div>
              </div>
            </div>
          </div>

          <Tabs className="detail-tabs" defaultActiveKey="1">
            <TabPane tab="Thông tin phim" key="1">
              <div className="detail__info">
                <div>
                  <div className="detail__item">Tên phim: {original_title}</div>

                  <div className="detail__item">
                    Thể loại:
                    {genres?.map((item) => (
                      <span key={item.id}>{` ${item.name} ,`}</span>
                    ))}
                  </div>

                  <div className="detail__item">
                    Ngôn ngữ:
                    {spoken_languages?.map((item, id) => (
                      <span key={id}>{` ${item.name} , `}</span>
                    ))}
                  </div>

                  <div className="detail__item">
                    Quốc gia:
                    {production_countries?.map((item, id) => (
                      <span key={id}>{` ${item.name}`}</span>
                    ))}
                  </div>
                </div>

                <div className="detail__items">
                  <div className="detail__item">
                    Ngày khởi chiếu: {release_date}
                  </div>
                  <div className="detail__item">
                    Rating: {Math.floor(vote_average)}
                  </div>
                  <div className="detail__item">Bình chọn: {vote_count}</div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Thông tin chi tiết" key="2">
              <div className="detail__movieInfo">{overview}</div>
            </TabPane>
            <TabPane tab="Hình ảnh" key="3">
              <div className="detail__movieInfo-wrap">
                <img
                  className="detail__movieInfo-wrap-img"
                  src={apiConfig.w500Image(
                    poster_path ? poster_path : backdrop_path
                  )}
                  alt="hinh anh"
                />
              </div>
            </TabPane>

            <TabPane tab="Trailer" key="4">
              <div
                className="detail__movieInfo"
                style={{
                  margin: "0 auto",
                  width: "40%",
                  textAlign: "center",
                  // border: "1px solid #fff",
                  borderRadius: "10px",
                  padding: "5px 0",
                }}
              >
                {videos ? (
                  <div className="detail__trailer">{renderTrailer()}</div>
                ) : (
                  "Đang cập nhật"
                )}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Detail;
