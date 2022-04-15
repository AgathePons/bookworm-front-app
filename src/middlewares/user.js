import axios from 'axios';
import {
  DELETE_ACCOUNT,
  DISCONNECT_USER,
  LOGIN,
  REGISTER_USER,
  SAVE_USER_STATS,
  resetState,
  saveUser,
} from 'src/actions/user';
import { resetBookwormState } from 'src/actions/bookworm';
import { loadAllKnowledgeFromUser, resetKnowledge } from 'src/actions/knowledge';
import { loadShopContentFromUser, resetShopState } from 'src/actions/shop';

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
            store.dispatch(resetKnowledge());
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

          if (response.status === 200) {
            store.dispatch(resetState());
            store.dispatch(resetKnowledge());
            store.dispatch(resetShopState());
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

          // if we want to add the JWToken to localStorage
          // to autolog user when he comes back to the app
          // localStorage.setItem('token', response.data.token);
          if (response.status === 200) {
            store.dispatch(saveUser(response.data));
            store.dispatch(loadAllKnowledgeFromUser(response.data.playerSave));
            store.dispatch(loadShopContentFromUser(response.data.playerSave));
            store.dispatch(resetBookwormState());
          }
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

          // if we want to add the JWToken to localStorage
          // to autolog user when he comes back to the app

          // localStorage.setItem('token', response.data.token);

          store.dispatch(saveUser(response.data));
          store.dispatch(loadAllKnowledgeFromUser(response.data.playerSave));
          store.dispatch(loadShopContentFromUser(response.data.playerSave));
          store.dispatch(resetBookwormState());
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

          store.dispatch(loadAllKnowledgeFromUser(response.data.playerSave));
        }
        catch (error) {
          console.log(error);
        }
      };

      saveUserStats();

      break;
    }
    // if we want to add the JWToken to localStorage to autolog user when he comes back to the app
    // we need to: import CHECK_USER from src/actions/user

    // case CHECK_USER: {
    //   const token = localStorage.getItem('token');

    //   const checkForUser = async () => {
    //     try {
    //  need to modify the api url
    //       const response = await axios.get('http://localhost:8000/api/playerAccount', {
    //         headers: {
    //           authorization: `Bearer ${token}`,
    //         },
    //       });

    //       console.log('checkforuser', response.data);
    //     }
    //     catch (error) {
    //       console.log(error);
    //     }
    //   };

    //   checkForUser();
    //   break;
    // }

    default:
      next(action);
  }
};

export default user;
