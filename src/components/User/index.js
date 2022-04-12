import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import UserForm from 'src/components/UserForm';
import UserInfo from '../UserInfo';

import './style.scss';

export default function User({ isOpen }) {
  const { isLogged } = useSelector((state) => state.user);

  return (
    <div className={isOpen ? 'user' : 'user-hidden'}>
      {
        isLogged
          ? <UserInfo /> : <UserForm />
      }
    </div>
  );
}

User.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
