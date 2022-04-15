import {
  SAVE_FIRST_SENTENCE, SAVE_RANDOM_SENTENCE, RESET_BOOKWORM_STATE, READ_NEW_NOTIFICATION,
} from '../actions/bookworm';

export const initialState = {
  messages: [],
  newNotification: true,
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
        newNotification: true,
      };
    }
    case READ_NEW_NOTIFICATION: {
      return {
        ...state,
        newNotification: false,
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
