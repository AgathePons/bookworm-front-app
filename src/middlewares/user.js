import axios from 'axios';
import { LOGIN, REGISTER_USER, saveUser } from '../actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
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
        }
        catch (error) {
          console.log(error);
        }
      };

      loginUser();

      break;
    }
    default:
      next(action);
  }
};

export default user;