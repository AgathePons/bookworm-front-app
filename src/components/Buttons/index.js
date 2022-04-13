// npm import
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components import
import Modal from 'src/components/Modal';
import { setDesktopFalse, setDesktopTrue } from '../../actions/desktop';

// assets import
import './style.css';

export default function Buttons() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const isDesktop = useSelector((state) => state.desktop.isDesktop);
  const isLogged = useSelector((state) => state.user.isLogged);

  function handleClick(e) {
    setTitle(e.target.value);
    setIsOpen(true);
  }

  useEffect(() => {
    if (isLogged) {
      setIsOpen(false);
    }
  }, [isLogged]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1366) {
        dispatch(setDesktopTrue());
      }
      else if (window.innerWidth <= 1366) {
        dispatch(setDesktopFalse());
      }
    }

    window.addEventListener('resize', handleResize);
  });
  return (
    <div className="buttons">
      <div className="buttons__block">
        <button onClick={handleClick} type="button" className="buttons__a" value="bookworm">Bookworm</button> {/* change "value" to modify modal's title */}
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
