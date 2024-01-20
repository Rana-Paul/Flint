"use client";
import React from "react";
import ReactPlayer from "react-player";
import MaxWithWrapper from "./MaxWidthWrapper";

const Video = () => {
  return (
    <div suppressHydrationWarning={true} className="aspect-videon relative">

      <ReactPlayer
        width="100%"
        height="auto"
        className="w-full h-full "
        url="https://utfs.io/f/b99b4e90-1c38-4836-b69a-85c708d1dd7d-1uswaj.mp4"
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
        style={{borderRadius: "100px",}}
      />
    </div>
    
  );
};

export default Video;
