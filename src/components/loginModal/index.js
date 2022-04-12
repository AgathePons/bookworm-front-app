import { useSelector } from 'react-redux';

import './style.css';

export default function LoginModal({ setIsModalOpen }) {
  const logoutCurrency = useSelector((state) => state.user.logoutCurrency);
  const handleClick = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="small-modal" onClick={handleClick}>
      <div className="small-modal-container">
        <div className="loginmodal">
          <div className="loginmodal__header">
            <p>Welcome back!</p>
            <button type="button" onClick={handleClick}>x</button>
          </div>
          <div className="loginmodal__body">
            <p>You've earned {logoutCurrency} while disconnected!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
