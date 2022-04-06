// components import
import Bookworm from '../Bookworm';
import Stats from '../Stats';
import Shop from '../Shop';
import User from '../User';

// assets import
import './style.css';

function Modal({
  title, setIsOpen, isOpen
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
          {/* {title === 'bookworm' ? <Bookworm isOpen={isOpen}/> : <Bookworm isOpen={null} />} */}
          <Bookworm isOpen={title === 'bookworm' || null} />
          {/* {title === 'stats' ? <Stats totalKnowledge={123} totalClicks={456} knowledgePerSecond={321} knowledgePerClick={789} /> : null} */}
          <Stats totalKnowledge={123} totalClicks={456} knowledgePerSecond={321} knowledgePerClick={789} isOpen={title === 'stats' || null} />
          {/* {title === 'shop' ? <Shop /> : null} */}
          <Shop isOpen={title === 'shop' || null} />
          {/* {title === 'user' ? <User /> : null} */}
          <User isOpen={title === 'user' || null} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
