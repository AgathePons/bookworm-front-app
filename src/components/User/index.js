import { useSelector } from 'react-redux';

import UserForm from '../UserForm';
import UserInfo from '../UserInfo';

import './style.css';

function User({ isOpen }) {
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

export default User;
