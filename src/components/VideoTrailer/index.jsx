import React from "react";

const VideoTrailer = () => {
  const { movieList } = React.useSelector((state) => state.movieList);

  return (
    <div>
      <iframe
        src={`'https://www.youtube.com/embed/${movieList.video}'`}
        title="Video trailer"
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
