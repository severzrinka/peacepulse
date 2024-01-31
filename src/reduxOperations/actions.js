// actions.js
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

export const setCurrentTime = (time) => ({
  type: actionTypes.currentTime,
  payload: time,
});

export const setShowCongrats = (showCongrats) => ({
  type: actionTypes.showCongratsSet,
  payload: showCongrats,
});
