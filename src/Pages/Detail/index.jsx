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
import { OutlineButton } from "../../components/Button";
import YouTube from "react-youtube";

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
  return (
    <>
      <Header></Header>
      <div className="detail">
        <div className="detail__bg">
          <div className="detail__trailer">{renderTrailer()}</div>

          <img
            src={apiConfig.w500Image(
              detail?.backdrop_path || detail?.poster_path
            )}
            alt="movie detail"
          />
        </div>
        <div className="detail__content">
          <Tabs className="detail-tabs" defaultActiveKey="1">
            <TabPane tab="Thông tin phim" key="1">
              <div className="detail__info">
                <div>
                  <div className="detail__item">
                    Tên phim: {detail?.original_title}
                  </div>

                  <div className="detail__item">
                    Thể loại:
                    {detail?.genres?.map((item) => (
                      <span key={item.id}>{` ${item.name} ,`}</span>
                    ))}
                  </div>

                  <div className="detail__item">
                    Ngôn ngữ:
                    {detail?.spoken_languages?.map((item, id) => (
                      <span key={id}>{` ${item.name} , `}</span>
                    ))}
                  </div>

                  <div className="detail__item">
                    Quốc gia:
                    {detail?.production_countries?.map((item, id) => (
                      <span key={id}>{` ${item.name}`}</span>
                    ))}
                  </div>
                </div>

                <div className="detail__items">
                  <div className="detail__item">
                    Ngày khởi chiếu: {detail?.release_date}
                  </div>
                  <div className="detail__item">
                    Rating: {detail?.vote_average}
                  </div>
                  <div className="detail__item">
                    Bình chọn: {detail?.vote_count}
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Thông tin chi tiết" key="2">
              <div className="detail-movieInfo">{detail?.overview}</div>
            </TabPane>
            <TabPane tab="Hình ảnh" key="3">
              <div style={{ margin: "0 auto", width: "60%" }}>
                <img
                  style={{ width: "100%", maxHeight: 300 }}
                  src={apiConfig.w500Image(
                    detail?.poster_path
                      ? detail?.poster_path
                      : detail?.backdrop_path
                  )}
                  alt="hinh anh"
                />
              </div>
            </TabPane>

            <TabPane tab="Trailer" key="4">
              <div
                className="detail-movieInfo"
                style={{
                  margin: "0 auto",
                  width: "40%",
                  textAlign: "center",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  padding: "5px 0",
                }}
              >
                {videos ? "Đã cập nhật" : "Đang cập nhật"}
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
