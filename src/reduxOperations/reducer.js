import * as actionTypes from "./actionTypes";

const initialState = {
  isVideoPlaying: false,
  minutes: "",
  isCountdownRunning: true,
  isCountupRunning: true,
  isPaused: false,
  show: false,
  time: 0,
  showCongrats: false,
};

const breathReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.videoPlaying:
      return { ...state, isVideoPlaying: action.payload };

    case actionTypes.minutesSet:
      return { ...state, minutes: action.payload };

    case actionTypes.countdownRunning:
      return { ...state, isCountdownRunning: action.payload };

    case actionTypes.countupRunning:
      return { ...state, isCountupRunning: action.payload };

    case actionTypes.paused:
      return { ...state, isPaused: action.payload };

    case actionTypes.showPopup:
      return { ...state, showPopup: action.payload };

    case actionTypes.currentTime:
      return { ...state, currentTime: action.payload };

    case actionTypes.showCongratsSet:
      return { ...state, showCongrats: action.payload };

    default:
      return state;
  }
};

export default breathReducer;
