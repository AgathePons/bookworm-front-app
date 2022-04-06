import axios from 'axios';
import { REGISTER_USER, saveUser } from '../actions/user';

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

      console.log(pseudo);
      const registerUser = async () => {
        try {
          const response = await axios.post('http://localhost:8000/api/playerAccount', {
            username: pseudo,
            mail: email,
            password: password,
            passwordConfirm: passwordConfirm,
          });
          console.log(response);

          store.dispatch(saveUser(response.data));
        }
        catch (error) {
          console.log(error);
        }
      };

      registerUser();

      break;
    }
    default:
      next(action);
  }
};

export default user;
