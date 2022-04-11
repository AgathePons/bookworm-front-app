import PropTypes from 'prop-types';

import './style.css';

export default function ShopItemDetail({
  name, number, text, handleCost, setIsOpen, clickFlat, clickPercent, idleFlat, idlePercent,
}) {
  const handleClick = (event) => {
    event.stopPropagation();
    setIsOpen(false);
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
            <p>{handleCost()}</p>
            <p>{number}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ShopItemDetail.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleCost: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  number: PropTypes.number,
  idleFlat: PropTypes.number,
  idlePercent: PropTypes.number,
  clickFlat: PropTypes.number,
  clickPercent: PropTypes.number,
};

ShopItemDetail.defaultProps = {
  number: 0,
  idleFlat: null,
  idlePercent: null,
  clickFlat: null,
  clickPercent: null,
};
