import { SAVE_FIRST_SENTENCE, SAVE_RANDOM_SENTENCE, RESET_BOOKWORM_STATE } from '../actions/bookworm';

export const initialState = {
  messages: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FIRST_SENTENCE: {
      const data = action.payload;
      const firstMessage = [data];
      return {
        ...state,
        messages: firstMessage,
      };
    }
    case SAVE_RANDOM_SENTENCE: {
      const data = action.payload;
      const newMessage = [...state.messages, data];
      return {
        ...state,
        messages: newMessage,
      };
    }
    case RESET_BOOKWORM_STATE: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
