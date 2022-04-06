import { useState } from 'react';
import { createAccount } from '../../apiRequests';

import './style.css';

function UserForm({ handleSubmit, handlePlayerId }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPassordConfirm] = useState('');

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'login_email':
        setLoginEmail(e.target.value);
        break;
      case 'login_password':
        setLoginPassword(e.target.value);
        break;
      case 'register_email':
        setEmail(e.target.value);
        break;
      case 'register_pseudo':
        setUser(e.target.value);
        break;
      case 'register_password':
        setPassword(e.target.value);
        break;
      case 'register_password_confirm':
        setPassordConfirm(e.target.value);
        break;
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    createAccount(user, email, password, passwordConfirm, handlePlayerId);
    handleSubmit();
  };

  return (
    <>
      <div className="user__login">
        <div className="user__login__title">login:</div>
        <form className="user__login__form" onSubmit={handleLoginSubmit}>
          <input type="email" name="login_email" className="user__login__form__input" placeholder="email" value={loginEmail} onChange={handleInputChange} />
          <input type="password" name="login_password" className="user__login__form__input" placeholder="password" value={loginPassword} onChange={handleInputChange} />
          <button className="user__login__form__button" type="submit">Submit</button>
        </form>
      </div>
      <div className="user__register">
        <div className="user__register__title">register:</div>
        <form className="user__register__form" onSubmit={handleRegisterSubmit}>
          <input type="email" name="register_email" className="user__register__form__input" placeholder="email" value={email} onChange={handleInputChange} />
          <input type="text" name="register_pseudo" className="user__register__form__input" placeholder="pseudo" value={user} onChange={handleInputChange} />
          <input type="password" name="register_password" className="user__register__form__input" placeholder="password" value={password} onChange={handleInputChange} />
          <input type="password" name="register_password_confirm" className="user__register__form__input" placeholder="confirm password" value={passwordConfirm} onChange={handleInputChange} />
          <button className="user__register__form__button" type="submit"> Submit</button>
        </form>
      </div>
    </>
  );
}

export default UserForm;
