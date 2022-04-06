export const CHANGE_USER_FORMS_FIELD = 'CHANGE_USER_FORMS_FIELD';
export const REGISTER_USER = 'REGISTER_USER';
export const SAVE_USER = 'SAVE_USER';

export const changeUserFormsField = (value, name) => ({
  type: CHANGE_USER_FORMS_FIELD,
  value,
  name,
});

export const registerUser = () => ({
  type: REGISTER_USER,
});

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});
