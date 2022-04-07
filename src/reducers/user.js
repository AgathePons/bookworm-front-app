import { CHANGE_USER_FORMS_FIELD, SAVE_USER } from 'src/actions/user';

export const initialState = {
  isLogged: false,
  loginEmail: '',
  loginPassword: '',
  email: '',
  password: '',
  passwordConfirm: '',
  pseudo: '',
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FORMS_FIELD: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case SAVE_USER: {
      const data = action.payload;
      return {
        // TODO !!!
        ...state,
        isLogged: data.logged,
        token: data.token,
        pseudo: data.playerSave.username,
        email: data.playerSave.mail,
      };
    }
    default:
      return state;
  }
};

export default reducer;
