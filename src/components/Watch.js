import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../constant/youtube";

const Watch = () => {
    const [singleVideo, setSingleVideo] = useState(null)
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getSingleVideo = async ()=>{
try {
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
    setSingleVideo(res?.data?.items[0])
} catch (error) {
    console.log(error);
    
}
  }
  useEffect(()=>{
    getSingleVideo()
  },[])
  return (
    <div className="ml-4">
      <div className="">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Kedar Aa Raha Hu | Kedarnath Song | New Bholenath Song 2024 | Shekhar Jaiswal"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">
            {singleVideo?.snippet?.title}
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default Watch;
