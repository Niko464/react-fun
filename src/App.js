import React from 'react';
import NetflixPlayerDemo from './pages/NetflixPlayerDemo/NetflixPlayerDemo';

function App(props) {
  return (
    // <AnimatedNumberDemo />
    // <NetflixPlayerDemo videoUrl={"vidA.mp4"} title={"Coiffeur Marco"} subtitle={"E01 Episode 01"}/>
    // <NetflixPlayerDemo videoUrl={"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"} title={"BigBuckBunny"} subtitle={"E01 Episode 01"}/>
    <NetflixPlayerDemo videoUrl={"https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/dash/ForBiggerMeltdownsVideo.mp4"} title={"Bigger Meltdown"} subtitle={"E01 Episode 01"}/>
  );
}

export default App;