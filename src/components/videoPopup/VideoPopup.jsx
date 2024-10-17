import React from "react";
import dynamic from 'next/dynamic';

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
                <span className="closeBtn" onClick={hidePopup}>Close</span>
                {videoId ? (
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${videoId}`}
                        controls
                        width="100%"
                        height="100%"
                    />
                ) : (
                    <div className="videoPlaceholder">
                        <p>No video available</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoPopup;
