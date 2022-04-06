import PropTypes from 'prop-types';
import { useState } from 'react';

import UserForm from '../UserForm';
import UserInfo from '../UserInfo';

import './style.css';

export default function User({ isOpen, handlePlayerId }) {
  const [logged, setLogged] = useState(false);

  const handleSubmit = () => {
    setLogged(true);
  };

  return (
    <div className={isOpen ? 'user' : 'user-hidden'}>
      {logged
        ? <UserInfo />
        : <UserForm handleSubmit={handleSubmit} handlePlayerId={handlePlayerId} />}
    </div>
  );
}

User.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handlePlayerId: PropTypes.func.isRequired,
};
