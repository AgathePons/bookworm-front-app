// npm import 
import PropTypes from 'prop-types';

// components import
import Bookworm from '../Bookworm';
import Stats from '../Stats';
import Shop from '../Shop';
import User from '../User';

// assets import
import './style.css';

export default function Modal({
  title, setIsOpen, isOpen, handlePlayerId,
}) {
  function handleClick() {
    setIsOpen(false);
  }

  return (
    <div className="box-position">
      <div className={isOpen ? 'modal' : 'modal modal-hidden'}>
        <div className="modal__header">
          <h2 className="modal__header__title">{title}</h2>
          <button type="button" className="modal__header__closeBtn" onClick={handleClick}>
            X
          </button>
        </div>
        <div className="modal__content">
          <Bookworm isOpen={title === 'bookworm'} />
          <Stats totalKnowledge={123} totalClicks={456} knowledgePerSecond={321} knowledgePerClick={789} isOpen={title === 'stats'} />
          <Shop isOpen={title === 'shop'} />
          <User isOpen={title === 'user'} handlePlayerId={handlePlayerId} />
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handlePlayerId: PropTypes.func.isRequired,
};
