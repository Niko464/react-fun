import React, { useEffect, useRef, useState } from 'react';
import "./NetflixPlayerDemo.css"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import useVideoControllerHider from '../../hooks/VideoControllerHider';
import { CircularProgress } from '@mui/material';
import VideoController from '../../components/VideoController/VideoController';

function NetflixPlayer({videoUrl, title, subtitle}) {
    const handle = useFullScreenHandle();
    const videoRef = useRef(null);
    const isVideoControllerVisible = useVideoControllerHider();
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!videoRef.current) return;

        const onLoading = () => {
            setIsLoading(true);
        }

        const video = videoRef.current;

        video.addEventListener("waiting", onLoading);
        return () => {
            video.removeEventListener("waiting", onLoading);
        }
    }, [videoRef, videoRef.current])

    return (
        <div className="container" onDoubleClick={() => {
            handle.active ? handle.exit() : handle.enter()
        }}>
            <FullScreen handle={handle}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    {isLoading ?
                    <CircularProgress variant="indeterminate" style={{position: "absolute", top: "50%", left: "50%", translate: "-50% -50%"}}/>
                    :
                    null
                    }
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        className={"video " + (handle.active ? "full-screen" : "non-full-screen")}
                        onLoadedData={() => {
                            setIsVideoLoaded(true)
                        }} />
                </div>
                <div style={{opacity: isVideoControllerVisible ? "1" : "0"}}>
                    <VideoController
                        videoRef={videoRef}
                        fullScreenHandle={handle}
                        isVideoLoaded={isVideoLoaded}
                        title={title}
                        subtitle={subtitle}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}/>
                </div>
            </FullScreen>
        </div>
    );
}

export default NetflixPlayer;