// npm import
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// components import
import User from '../User';
import Bookworm from '../Bookworm';
import Stats from '../Stats';
import Shop from '../Shop';
import Info from '../Info';

// assets import
import './style.scss';

export default function Modal({
  title, setIsOpen, isOpen, isDesktop,
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.684 23.684"><path d="M23.684 1.974V5.92H21.71v1.975h-1.973v1.973h-1.974v1.974h1.974v1.974h1.973v1.973h1.974v5.921H21.71v1.974h-3.946V21.71h-1.975v-1.973h-1.973v-1.974h-1.974v1.974H9.868v1.973H7.896v1.974H1.974V21.71H0v-3.946h1.974v-1.975h1.973v-1.973H5.92v-1.974H3.947V9.868H1.974V7.896H0V1.974h1.974V5.92h1.973V3.949H5.92V1.974h1.975v1.975h1.973V5.92h1.974V3.949h1.974V1.974h1.973V0h5.921v1.974h1.974zm-21.71 0V0H5.92v1.974H1.974z" /></svg>
          </button>
        </div>
        <div className="modal__content">
          <Bookworm isOpen={title === 'bookworm'} />
          <Stats isOpen={title === 'stats'} />
          { isDesktop ? <Info isOpen={title === 'info'} /> : <Shop isOpen={title === 'shop'} />}
          <User isOpen={title === 'user'} />
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};
