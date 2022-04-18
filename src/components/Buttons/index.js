// npm import
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components import
import Modal from 'src/components/Modal';
import { readNewNotification } from 'src/actions/bookworm';

// actions import

// assets import
import './style.scss';

export default function Buttons() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const isDesktop = useSelector((state) => state.desktop.isDesktop);
  const isLogged = useSelector((state) => state.user.isLogged);
  const newNotification = useSelector((state) => state.bookworm.newNotification);

  function handleClick(e) {
    setTitle(e.currentTarget.value);
    setIsOpen(true);
    if (title === 'bookworm') {
      dispatch(readNewNotification());
    }
  }

  useEffect(() => {
    if (isLogged) {
      setIsOpen(false);
    }
  }, [isLogged]);

  return (
    <div className="buttons">
      <div className="buttons__block">
        <button onClick={handleClick} type="button" className={newNotification ? 'buttons__a notification' : 'buttons__a'} value="bookworm">
          bookworm
        </button> {/* change "value" to modify modal's title */}
        <button onClick={handleClick} type="button" className="buttons__b" value="user">User</button>
      </div>
      <div className="buttons__block">
        {isDesktop ? <button onClick={handleClick} type="button" className="buttons__c" value="info">Info</button>
          : <button onClick={handleClick} type="button" className="buttons__c" value="shop">Shop</button>}

        <button onClick={handleClick} type="button" className="buttons__d" value="stats">Stats</button>
      </div>
      <Modal title={title} setIsOpen={setIsOpen} isOpen={isOpen} isDesktop={isDesktop} />
    </div>
  );
}
