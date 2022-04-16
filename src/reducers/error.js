export const initialState = {
  pouet: 'pouet',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'pouet': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
