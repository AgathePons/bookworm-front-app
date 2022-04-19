import { SET_LOGIN_ERROR, RESET_ERROR } from 'src/actions/error';

export const initialState = {
  errorMessage: '',
  serverError: 'Oops, something wrong happened',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_ERROR: {
      return {
        ...state,
        errorMessage: action.message,
      };
    }
    case RESET_ERROR: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
