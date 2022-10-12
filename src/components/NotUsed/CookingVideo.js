import ReactPlayer from "react-player/youtube";
import React from 'react';

function MyVideo(){
    return (
        <ReactPlayer 
        url="https://www.youtube.com/watch?v=DHVO4KeFCXY" 
        playing={false}
        volume={0.2}
        />
    );
};
export default MyVideo;