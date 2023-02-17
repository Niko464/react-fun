import { useEffect, useRef, useState } from "react";


export default function useVideoControllerHider() {
    const [isVideoControllerVisible, setIsVideoControllerVisible] = useState(false);
    const mouseMoveTimeRef = useRef(Date.now());

    useEffect(() => {
        const handleMouseMove = () => {
            mouseMoveTimeRef.current = Date.now();
            if (isVideoControllerVisible === false) {
                setIsVideoControllerVisible(true);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        const intervalId = setInterval(() => {
            const currentTime = Date.now();
            const timeSinceMouseMove = currentTime - mouseMoveTimeRef.current;

            if (timeSinceMouseMove >= 3000 && isVideoControllerVisible)
                setIsVideoControllerVisible(false);
        }, 100);
        /*
        Cleanup the event listener and the interval when the component unmounts.
        */
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          clearInterval(intervalId);
        };
      }, [isVideoControllerVisible]);

    return isVideoControllerVisible;
}