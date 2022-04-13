import PropTypes from 'prop-types';

import './style.css';

export default function Info({ isOpen }) {
  return (
    <div className={isOpen ? 'info__container' : 'info__container-hidden'}>Info</div>
  );
}

Info.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
