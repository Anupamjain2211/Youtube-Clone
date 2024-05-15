import React, { useEffect, useState } from "react";
import axios from "axios";
import API_KEY, { YOUTUBE_VIDEO_API } from "../constant/youtube";
import VideoCart from "./VideoCart";
const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      console.log(res?.data?.items);
      setVideo(res?.data?.items);
    } catch (error) {
      console.error(
        "Error fetching YouTube video data",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    fetchingYoutubeVideo();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {video.map((item) => {
        return <VideoCart key={item.id} item = {item}/>;
      })}
    </div>
  );
};

export default VideoContainer;
