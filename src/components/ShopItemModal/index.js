import PropTypes from 'prop-types';
import convertToReadable from '../../selectors';
import { icones } from '../../assets/images/icon';

import './style.scss';

export default function ShopItemModal({
  name,
  number,
  text,
  handleCost,
  setIsModalOpen,
  clickFlat,
  clickPercent,
  idleFlat,
  idlePercent,
  icon,
}) {
  const handleClick = (event) => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  const handleBonusTotal = () => {
    if (clickFlat) {
      return `+${clickFlat * number} knowledge / click`;
    }
    if (clickPercent) {
      return `${clickPercent * number}% knowledge / click`;
    }
    if (idleFlat) {
      return `+${idleFlat * number} knowledge / s`;
    }
    if (idlePercent) {
      return `${idlePercent * number}% knowledge /s`;
    }
    return null;
  };
  const handleBonus = () => {
    if (clickFlat) {
      return `+${clickFlat} knowledge / click`;
    }
    if (clickPercent) {
      return `${clickPercent}% knowledge / click`;
    }
    if (idleFlat) {
      return `+${idleFlat} knowledge / s`;
    }
    if (idlePercent) {
      return `${idlePercent}% knowledge /s`;
    }
    return null;
  };

  return (
    <div className="small-modal" onClick={handleClick}>
      <div className="small-modal-container">
        <div className="shopitemdetail">
          <div className="shopitemdetail__header">
            <div className="shopitemdetail__header__img">
              <img src={icones[icon]} alt="icones" />
            </div>
            <p>{name}</p>
            <button className="shopitemdetail__header__btn" type="button" onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.684 23.684"><path d="M23.684 1.974V5.92H21.71v1.975h-1.973v1.973h-1.974v1.974h1.974v1.974h1.973v1.973h1.974v5.921H21.71v1.974h-3.946V21.71h-1.975v-1.973h-1.973v-1.974h-1.974v1.974H9.868v1.973H7.896v1.974H1.974V21.71H0v-3.946h1.974v-1.975h1.973v-1.973H5.92v-1.974H3.947V9.868H1.974V7.896H0V1.974h1.974V5.92h1.973V3.949H5.92V1.974h1.975v1.975h1.973V5.92h1.974V3.949h1.974V1.974h1.973V0h5.921v1.974h1.974zm-21.71 0V0H5.92v1.974H1.974z" /></svg>
            </button>
          </div>
          <div className="shopitemdetail__body">
            <p className="shopitemdetail__body__description">{text}</p>
            <p className="shopitemdetail__body__bonus">
              <span className="bonus--pre">Bonus:</span>
              <span className="bonus--post">{handleBonus()}</span>
            </p>
            <p className="shopitemdetail__body__bonus">
              <span className="bonus--pre">Total:</span>
              <span className="bonus--post">{handleBonusTotal()}</span>
            </p>
            <p className="shopitemdetail__body__bonus">
              <span className="bonus--pre">Number owned:</span>
              <span className="bonus--post">{number}</span>
            </p>
            <p className="shopitemdetail__body__bonus">
              <span className="bonus--pre">Cost:</span>
              <span className="bonus--post">{handleCost && convertToReadable(handleCost())}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ShopItemModal.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
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
