import { CHANGE_USER_FORMS_FIELD } from 'src/actions/user';

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
    default:
      return state;
  }
};

export default reducer;
