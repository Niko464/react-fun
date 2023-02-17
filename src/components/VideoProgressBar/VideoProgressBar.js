import { createRef, useEffect, useState } from "react";
import "./VideoProgressBar.css"

function formatTime(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    let formattedTime = "";
  
    if (hours > 0) {
      formattedTime += hours.toString().padStart(2, "0") + ":";
    }
    formattedTime += minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    return formattedTime;
  }
  

export default function VideoProgressBar({videoRef, isVideoLoaded, isPlaying}) {
    const [currentProgressionFormatedString, setCurrentProgressionFormatedString] = useState("00:00");
    const [videoDurationFormatedString, setVideoDurationFormatedString] = useState("00:00");
    const [videoDuration, setVideoDuration] = useState(0);
    const progressionRef = createRef();
    const bufferedRef = createRef();

    /*
        When the video is loaded, we get the duration of the video and format it to a string
    */
    useEffect(() => {
        if (videoRef.current === null) return;
        const currVideo = videoRef.current;

        if (isVideoLoaded) {
            setVideoDuration(Number(currVideo.duration));
            setVideoDurationFormatedString(formatTime(currVideo.duration));
        }
    }, [videoRef, isVideoLoaded, setVideoDuration, setVideoDurationFormatedString])

    /*
        When the video is playing, we update the progression bar
    */
    useEffect(() => {
        if (videoRef.current === null) return;
        const currVideo = videoRef.current;

        const onTimeUpdate = () => {
            if (!currVideo.currentTime || !progressionRef.current) return;

            const currTime = currVideo.currentTime;
            const duration = currVideo.duration;
            const progression = (currTime / duration) * 100;         

            progressionRef.current.style.width = progression + "%";
        }

        currVideo.addEventListener("timeupdate", onTimeUpdate)
        return () => {
            currVideo.removeEventListener("timeupdate", onTimeUpdate)
        }

    }, [videoRef, progressionRef])

    /*
        When the video is playing, we update the current progression time
    */
    useEffect(() => {
        if (videoRef.current === null) return;
        const currVideo = videoRef.current;

        const onTimeUpdate = () => {
            if (!currVideo.currentTime)
                return;
            const currTime = currVideo.currentTime;
            const formattedTime = formatTime(currTime); 

            if (formattedTime !== currentProgressionFormatedString) {
                setCurrentProgressionFormatedString(formattedTime);
            }
        }

        currVideo.addEventListener("timeupdate", onTimeUpdate)
        return () => {
            currVideo.removeEventListener("timeupdate", onTimeUpdate)
        }
    }, [videoRef, currentProgressionFormatedString, setCurrentProgressionFormatedString])


    /*
        When the video is playing, we update the buffered bar
    */
    useEffect(() => {
        if (videoRef.current === null) return;
        const currVideo = videoRef.current;

        const onBufferLoading = () => {
            if (!currVideo.buffered.length || !bufferedRef.current) return;

            const duration = currVideo.duration;
            const buffered = currVideo.buffered.end(currVideo.buffered.length - 1);
            const progression = (buffered / duration) * 100;

            if (duration > 0) {
                bufferedRef.current.style.width = progression + "%";
            }
        }

        currVideo.addEventListener("progress", onBufferLoading)
        return () => {
            currVideo.removeEventListener("progress", onBufferLoading)
        }
    }, [videoRef, bufferedRef])

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-container-inner">
                <div className="progress-bar">
                    <span
                        ref={progressionRef}
                        className="progress-bar-progression"
                        style={{
                            animationPlayState: isPlaying ? "running" : "paused",
                            animationDuration: isVideoLoaded ? `${videoDuration}s` : "0s"
                        }} />
                    <span ref={bufferedRef} className="progress-bar-buffered" />
                </div>
                <h4>{currentProgressionFormatedString + " / " + videoDurationFormatedString}</h4>
            </div>
        </div>
    )
}