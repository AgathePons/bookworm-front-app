import { useState } from 'react';

import UserForm from '../UserForm';
import UserInfo from '../UserInfo';

import './style.css';

const User = ({ isOpen, handlePlayerId }) => {

  const [logged, setLogged] = useState(false);

  const handleSubmit = () => {
    setLogged(true)
  }

  return (
    <div className={isOpen ? "user" : "user-hidden"}>
      {logged ? <UserInfo /> : <UserForm handleSubmit={handleSubmit} handlePlayerId={handlePlayerId} />}
    </div>
  );
}

export default User;
