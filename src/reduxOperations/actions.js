import * as actionTypes from "./actionTypes";

export const setVideoPlaying = (isPlaying) => ({
  type: actionTypes.videoPlaying,
  payload: isPlaying,
});

export const setMinutes = (minutes) => ({
  type: actionTypes.minutesSet,
  payload: minutes,
});

export const setCountdownRunning = (isCountdownRunning) => ({
  type: actionTypes.countdownRunning,
  payload: isCountdownRunning,
});

export const setCountupRunning = (isCountupRunning) => ({
  type: actionTypes.countupRunning,
  payload: isCountupRunning,
});

export const setPaused = (isPaused) => ({
  type: actionTypes.paused,
  payload: isPaused,
});

export const setShowPopup = (show) => ({
  type: actionTypes.showPopup,
  payload: show,
});

export const setCurrentTime = (currentTime) => ({
  type: actionTypes.currentTimeSet,
  payload: currentTime,
});

export const setShowCongrats = (showCongrats) => ({
  type: actionTypes.showCongratsSet,
  payload: showCongrats,
});
export const setvrijeme = (times) => ({
  type: actionTypes.vrijeme,
  payload: times,
});

export const setpozadina = (boja) => ({
  type: actionTypes.pozadina,
  payload: boja,
});
