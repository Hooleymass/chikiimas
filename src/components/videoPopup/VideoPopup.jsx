'use client'
import React from "react";
import dynamic from 'next/dynamic';

//import ReactPlayer from "react-player/youtube";
const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });
import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                // playing={true}
                />
                {/* <iframe src={`https://www.youtube.com/watch?v=${videoId}`} frameborder="0"></iframe> */}
            </div>
        </div>
    );
};

export default VideoPopup;
