export const CHANGE_USER_FORMS_FIELD = 'CHANGE_USER_FORMS_FIELD';
export const REGISTER_USER = 'REGISTER_USER';
export const SAVE_USER = 'SAVE_USER';
export const LOGIN = 'LOGIN';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const RESET_STATE = 'RESET_STATE';

export const changeUserFormsField = (value, name) => ({
  type: CHANGE_USER_FORMS_FIELD,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});

export const registerUser = () => ({
  type: REGISTER_USER,
});

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload: payload,
});

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const resetState = () => ({
  type: RESET_STATE,
});
