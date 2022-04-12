import PropTypes from 'prop-types';
import convertToReadable from '../../selectors';

import './style.css';

export default function ShopItemModal({
  name, number, text, handleCost, setIsModalOpen, clickFlat, clickPercent, idleFlat, idlePercent,
}) {
  const handleClick = (event) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  const handleBonus = () => {
    if (clickFlat) {
      return `+${clickFlat}/click`;
    }
    if (clickPercent) {
      return `${clickPercent}%/click`;
    }
    if (idleFlat) {
      return `+${idleFlat}/s`;
    }
    if (idlePercent) {
      return `${idlePercent}%/s`;
    }
    return null;
  };

  return (
    <div className="small-modal" onClick={handleClick}>
      <div className="small-modal-container">
        <div className="shopitemdetail">
          <div className="shoitemdetail__header">
            <div className="shoitemdetail__header__img" />
            <p>{name}</p>
            <button type="button" onClick={handleClick}>x</button>
          </div>
          <div className="shoitemdetail__body">
            <p>{text}</p>
            <p>BONUS: {handleBonus()}</p>
          </div>
          <div className="shoitemdetail__footer">
            <p>{handleCost && convertToReadable(handleCost())}</p>
            <p>{number}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ShopItemModal.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleCost: PropTypes.func,
  setIsModalOpen: PropTypes.func.isRequired,
  number: PropTypes.number,
  idleFlat: PropTypes.number,
  idlePercent: PropTypes.number,
  clickFlat: PropTypes.number,
  clickPercent: PropTypes.number,
};

ShopItemModal.defaultProps = {
  number: 0,
  handleCost: null,
  idleFlat: null,
  idlePercent: null,
  clickFlat: null,
  clickPercent: null,
};
