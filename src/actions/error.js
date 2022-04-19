// Action types
export const RESET_ERROR = 'RESET_ERROR';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

// Action creators
export const setLoginError = (payload) => ({
  type: SET_LOGIN_ERROR,
  message: payload,
});

export const resetError = () => ({
  type: RESET_ERROR,
});
