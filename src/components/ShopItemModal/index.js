import PropTypes from 'prop-types';
import convertToReadable from '../../selectors';

import './style.scss';

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
          <div className="shopitemdetail__header">
            <div className="shopitemdetail__header__img">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152 0H154.2C186.1 0 215.7 16.91 231.9 44.45L256 85.46L280.1 44.45C296.3 16.91 325.9 0 357.8 0H360C408.6 0 448 39.4 448 88C448 102.4 444.5 115.1 438.4 128H480C497.7 128 512 142.3 512 160V224C512 241.7 497.7 256 480 256H32C14.33 256 0 241.7 0 224V160C0 142.3 14.33 128 32 128H73.6C67.46 115.1 64 102.4 64 88C64 39.4 103.4 0 152 0zM190.5 68.78C182.9 55.91 169.1 48 154.2 48H152C129.9 48 112 65.91 112 88C112 110.1 129.9 128 152 128H225.3L190.5 68.78zM360 48H357.8C342.9 48 329.1 55.91 321.5 68.78L286.7 128H360C382.1 128 400 110.1 400 88C400 65.91 382.1 48 360 48V48zM32 288H224V512H80C53.49 512 32 490.5 32 464V288zM288 512V288H480V464C480 490.5 458.5 512 432 512H288z" /></svg>
            </div>
            <p>{name}</p>
            <button className="shopitemdetail__header__btn" type="button" onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.684 23.684"><path d="M23.684 1.974V5.92H21.71v1.975h-1.973v1.973h-1.974v1.974h1.974v1.974h1.973v1.973h1.974v5.921H21.71v1.974h-3.946V21.71h-1.975v-1.973h-1.973v-1.974h-1.974v1.974H9.868v1.973H7.896v1.974H1.974V21.71H0v-3.946h1.974v-1.975h1.973v-1.973H5.92v-1.974H3.947V9.868H1.974V7.896H0V1.974h1.974V5.92h1.973V3.949H5.92V1.974h1.975v1.975h1.973V5.92h1.974V3.949h1.974V1.974h1.973V0h5.921v1.974h1.974zm-21.71 0V0H5.92v1.974H1.974z" /></svg>
            </button>
          </div>
          <div className="shopitemdetail__body">
            <p>{text}</p>
            <p>BONUS: {handleBonus()}</p>
          </div>
          <div className="shopitemdetail__footer">
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
