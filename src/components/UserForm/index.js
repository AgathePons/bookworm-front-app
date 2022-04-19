import { useSelector, useDispatch } from 'react-redux';
import { useIntervalWhen } from 'rooks';
import {
  changeUserFormsField,
  registerUser,
  login,
  changeIsRegister,
} from 'src/actions/user';
import { resetError } from 'src/actions/error';

// assets import
import './style.scss';

export default function UserForm() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.error.errorMessage);
  const {
    loginEmail,
    loginPassword,
    email,
    password,
    passwordConfirm,
    pseudo,
  } = useSelector((state) => state.user);

  useIntervalWhen(() => {
    dispatch(resetError());
  }, 3000, errorMessage);

  const handleInputChange = (event) => {
    dispatch(changeUserFormsField(event.target.value, event.target.name));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    dispatch(changeIsRegister());
    dispatch(registerUser());
  };

  return (
    <>
      <div className="user__login">
        <div className="user__login__title">login:</div>
        <form className="user__login__form" onSubmit={handleLoginSubmit}>
          <input type="email" name="loginEmail" className="user__login__form__input" placeholder="email" value={loginEmail} onChange={handleInputChange} />
          <input type="password" name="loginPassword" className="user__login__form__input" placeholder="password" value={loginPassword} onChange={handleInputChange} />
          <button className="user__login__form__button" type="submit">Submit</button>
        </form>
        {errorMessage && <p className="login-error">{errorMessage}</p>}
      </div>
      <div className="user__register">
        <div className="user__register__title">register:</div>
        <form className="user__register__form" onSubmit={handleRegisterSubmit}>
          <input type="email" name="email" className="user__register__form__input" placeholder="email" value={email} onChange={handleInputChange} />
          <input type="text" name="pseudo" className="user__register__form__input" placeholder="pseudo" value={pseudo} onChange={handleInputChange} />
          <input type="password" name="password" className="user__register__form__input" placeholder="password" value={password} onChange={handleInputChange} />
          <input type="password" name="passwordConfirm" className="user__register__form__input" placeholder="confirm password" value={passwordConfirm} onChange={handleInputChange} />
          <button className="user__register__form__button" type="submit"> Submit</button>
        </form>
      </div>
    </>
  );
}
