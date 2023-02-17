# react-fun - This will host some stuff I made in react

## <ins> Animated Number

Features:

- I want it to start at 0 and go to the targetNumber in a fixed amount of time
- I want to be able to set a unit for example "M" for Million or "$" for dollars etc. Basically setting an optional prefix and suffix.
- I want to be able to set the targetNumber with a function, to be able to change it with an api call response.
- I want it to do the animation only when it's in the user's view port

Requirements:

npm install react-scroll-trigger react-spring

## <ins> Netflix Player

Features:

- I want the video to not be the entire screen at the start
- I want there to be a possibility to  go to fullscreen mode by: clicking a button or double clicking anywhere
- I want to be able to play the video in fullscreen or not, the progress is maintained between the different modes
- The controlling UI should be visible by default and when the mouse doesn't move for 3s, it gets hidden
- Each controlling btn should scale up when hovered
- I want to be able to pause and play the video
- Be able to go backwards or forwards in the video
- When the video is loading because of slow network, I want it to display a circular progression
- The circular progression that shows when slow internet has to be visible even when the VideoControllerUI is invisible
- I want there to be a progress bar of where I'm at in the video
- I want the video to have a buffer, and I want it to be visual, be able to see how much of the video is loaded
- I want to be able to click anywhere on the progress bar and jump to that moment of the video
- I want to be able to see the time of where i'm hovering over the progressbar

TODO:

- The animation of the progressbar has to be smooth (so that if the video length is small, it isn't jittery)
- I want to be able to control the sound volume
- I want to be able to control the playback rate

Future improvements:

- When I activate the smooth progress bar: going forward or backwards 10 seconds, the only thing that is not updated is the progressionbar.
- The buffer progressbar should be able to be fragmented, currently if you skip to the end of the video the buffer will go there, and if you go back it will stay there
even if you haven't really loaded the entire video, the buffer shows you did.

Requirements:

- npm i react-full-screen @mui/material
- a "videA.mp4" file in the public folder (I didn't push that on github)
