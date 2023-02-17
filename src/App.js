import React from 'react';
import NetflixPlayerDemo from './pages/NetflixPlayerDemo/NetflixPlayerDemo';

function App(props) {
  return (
    // <AnimatedNumberDemo />
    <NetflixPlayerDemo videoUrl={"vidA.mp4"} title={"Coiffeur Marco"} subtitle={"E01 Episode 01"}/>
  );
}

export default App;