// npm import
import { useState } from 'react';
import PropTypes from 'prop-types';

// components import
import Modal from '../Modal';

// assets import
import './style.css';

export default function Buttons({ handlePlayerId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');

  function handleClick(e) {
    setTitle(e.target.value);
    setIsOpen(true);
  }
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
      <Modal title={title} setIsOpen={setIsOpen} isOpen={isOpen} handlePlayerId={handlePlayerId} />
    </div>
  );
}

Buttons.propTypes = {
  handlePlayerId: PropTypes.func.isRequired,
};
