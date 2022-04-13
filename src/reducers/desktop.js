import { SET_DESKTOP_FALSE, SET_DESKTOP_TRUE } from '../actions/desktop';

export const initialState = {
  isDesktop: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DESKTOP_TRUE: {
      return {
        ...state,
        isDesktop: true,
      };
    }
    case SET_DESKTOP_FALSE: {
      return {
        ...state,
        isDesktop: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
