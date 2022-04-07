// ACTION TYPE
export const GET_FIRST_SENTENCE = 'GET_FIRST_SENTENCE';
export const SAVE_FIRST_SENTENCE = 'SAVE_FIRST_SENTENCE';
export const GET_RANDOM_SENTENCE = 'GET_RANDOM_SENTENCE';
export const SAVE_RANDOM_SENTENCE = 'SAVE_RANDOM_SENTENCE';

// ACTION CREATOR

export const getFirstSentence = () => ({
  type: GET_FIRST_SENTENCE,
});

export const saveFirstSentence = (payload) => ({
  type: SAVE_FIRST_SENTENCE,
  payload: payload,
});

export const getRandomSentence = () => ({
  type: GET_RANDOM_SENTENCE,
});

export const saveRandomSentence = (payload) => ({
  type: SAVE_RANDOM_SENTENCE,
  payload: payload,
});
