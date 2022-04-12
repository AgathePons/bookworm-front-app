// npm import
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// components import
import Modal from 'src/components/Modal';

// assets import
import './style.css';

export default function Buttons() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
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
  return (
    <div className="buttons">
      <div className="buttons__block">
        <button onClick={handleClick} type="button" className="buttons__a" value="bookworm">A</button> {/* change "value" to modify modal's title */}
        <button onClick={handleClick} type="button" className="buttons__b" value="user">B</button>
      </div>
      <div className="buttons__block">
        <button onClick={handleClick} type="button" className="buttons__c" value="shop">C</button>
        <button onClick={handleClick} type="button" className="buttons__d" value="stats">D</button>
      </div>
      <Modal title={title} setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}
