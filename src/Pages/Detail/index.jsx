import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import apiConfig from "../../api/apiConfig";
import Header from "../../components/Header";

import { fetchMovieDetailById } from "../../store/actions/movie";
import "./styles.scss";
import { Tabs } from "antd";

const Detail = () => {
  const { detail } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchMovieDetailById(id));
  }, [dispatch, detail?.id, id]);

  const { TabPane } = Tabs;

  return (
    <>
      <Header></Header>
      <div className="detail">
        <div className="detail__bg">
          <img
            src={apiConfig.w500Image(
              detail?.backdrop_path || detail?.poster_path
            )}
            alt="movie detail"
          />
        </div>
        <div className="detail__content">
          <Tabs
            className="detail-tabs"
            defaultActiveKey="1"
            // onChange={onChange}
          >
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
              <div style={{ textAlign: "center" }}>
                <img
                  style={{ width: 600, height: 400 }}
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
                Đang cập nhật
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Detail;
