import { useSelector, useDispatch } from 'react-redux';
import { changeUserFormsField, registerUser } from 'src/actions/user';

import './style.css';

function UserForm() {
  const {
    loginEmail,
    loginPassword,
    email,
    password,
    passwordConfirm,
    pseudo,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(changeUserFormsField(event.target.value, event.target.name));
  };
  //                   !!!!!!!!!!!!              //
  const handleLoginSubmit = (event) => {
    event.preventDefault();
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser());
  };
  //                 !!!!!!!!        fin //
  return (
    <>
      <div className="user__login">
        <div className="user__login__title">login:</div>
        <form className="user__login__form" onSubmit={handleLoginSubmit}>
          <input type="email" name="loginEmail" className="user__login__form__input" placeholder="email" value={loginEmail} onChange={handleInputChange} />
          <input type="password" name="loginPassword" className="user__login__form__input" placeholder="password" value={loginPassword} onChange={handleInputChange} />
          <button className="user__login__form__button" type="submit">Submit</button>
        </form>
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

export default UserForm;
