import axios from 'axios';
import {
  DELETE_ACCOUNT,
  LOGIN,
  REGISTER_USER,
  saveUser,
  SAVE_USER_STATS,
  resetState,
  DISCONNECT_USER,
} from 'src/actions/user';

import { loadAllKnowledgeFromUser } from '../actions/knowledge';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_ACCOUNT: {
      const state = store.getState();
      const { token } = state.user;

      const deleteAccount = async () => {
        try {
          const response = await axios.delete('http://localhost:8000/api/playerAccount', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          if (response.status === 204) {
            store.dispatch(resetState());
          }
        }
        catch (error) {
          console.log(error);
        }
      };

      deleteAccount();

      break;
    }

    case DISCONNECT_USER: {
      const state = store.getState();
      const { token } = state.user;
      const { knowledge, totalOfClicks } = state.knowledge;

      const disconnectUser = async () => {
        try {
          const response = await axios.patch('http://localhost:8000/api/disconnect', {
            currency: knowledge,
            clickCounter: totalOfClicks,
          }, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          console.log(response);
          if (response.status === 200) {
            store.dispatch(resetState());
          }
        }
        catch (error) {
          console.log(error);
        }
      };

      disconnectUser();

      break;
    }

    case LOGIN: {
      const state = store.getState();
      const { loginEmail, loginPassword } = state.user;

      const loginUser = async () => {
        try {
          const response = await axios.post('http://localhost:8000/api/login', {
            mail: loginEmail,
            password: loginPassword,
          });

          store.dispatch(saveUser(response.data));
          store.dispatch(loadAllKnowledgeFromUser(response.data.playerSave));
        }
        catch (error) {
          console.log(error);
        }
      };

      loginUser();

      break;
    }

    case REGISTER_USER: {
      const state = store.getState();
      const {
        pseudo,
        email,
        password,
        passwordConfirm,
      } = state.user;

      const registerUser = async () => {
        try {
          const response = await axios.post('http://localhost:8000/api/playerAccount', {
            username: pseudo,
            mail: email,
            password: password,
            passwordConfirm: passwordConfirm,
          });

          store.dispatch(saveUser(response.data));
        }
        catch (error) {
          // TODO
          console.log(error);
        }
      };

      registerUser();

      break;
    }

    case SAVE_USER_STATS: {
      const state = store.getState();
      const { token } = state.user;
      const { knowledge, totalOfClicks } = state.knowledge;

      const saveUserStats = async () => {
        try {
          const response = await axios.patch('http://localhost:8000/api/save', {
            currency: knowledge,
            clickCounter: totalOfClicks,
          }, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          store.dispatch(saveUser(response.data));
          store.dispatch(loadAllKnowledgeFromUser(response.data.playerSave));
          console.log(response.data);
        }
        catch (error) {
          console.log(error);
        }
      };

      saveUserStats();

      break;
    }

    default:
      next(action);
  }
};

export default user;
