"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleVideoPlayer = () => {
    if (!isError) {
      setIsOpen((prevState) => !prevState);
    }
  };

  const options = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-accent float-right bg-color-secondary px-3 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
          onError={() => {
            setIsOpen(false);
            setIsError(true);
          }}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = ({ text }) => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed rounded bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl
         hover:bg-color-accent transition-all shadow-xl"
      >
        {isError ? "Trailer error" : text}
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer text={"Tonton Trailer"} />;
};

export default VideoPlayer;
