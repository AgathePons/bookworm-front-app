import axios from 'axios';
import {
  GET_FIRST_SENTENCE, GET_RANDOM_SENTENCE, saveFirstSentence, saveRandomSentence,
} from '../actions/bookworm';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FIRST_SENTENCE: {
      const fetchFirstSentence = async () => {
        try {
          const response = await axios.get('http://ns3251440.ip-87-98-217.eu:8002/api/sentence/first');
          store.dispatch(saveFirstSentence(response.data));
        }
        catch (error) {
          // TODO
          console.log(error);
        }
      };

      fetchFirstSentence();

      break;
    }
    case GET_RANDOM_SENTENCE: {
      const state = store.getState();
      const { token } = state.user;
      const fetchRandomSentence = async () => {
        try {
          const response = await axios.get('http://ns3251440.ip-87-98-217.eu:8002/api/sentence/', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          store.dispatch(saveRandomSentence(response.data));
        }
        catch (error) {
          // TODO
          console.log(error);
        }
      };

      fetchRandomSentence();

      break;
    }
    default:
      next(action);
  }
};

export default user;
