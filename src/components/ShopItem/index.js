import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { buyShopItem, buyMoreShopItem } from '../../actions/shop';
import ShopItemDetail from '../ShopItemModal';

import './style.scss';

export default function ShopItem({
  id, name, cost, nextCost, number, text, clickFlat, clickPercent, idleFlat, idlePercent,
}) {
  const [isBuyable, setIsBuyable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const knowledge = useSelector((state) => state.knowledge.knowledge);

  const handleCost = () => {
    if (number > 0) {
      return nextCost;
    }
    return cost;
  };

  const handleClick = () => {
    const verify = handleCost();
    if (verify === cost) {
      if (cost <= knowledge) {
        if (number === 0) {
          return dispatch(buyShopItem(id));
        }
        return dispatch(buyMoreShopItem(id));
      }
      return console.log('tu es pauvre!');
    }
    if (verify === nextCost) {
      if (nextCost <= knowledge) {
        if (number === 0) {
          return dispatch(buyShopItem(id));
        }
        return dispatch(buyMoreShopItem(id));
      }
      return console.log('tu es pauvre!');
    }
    return console.log('oops, there was a problem!');
  };

  const handleModal = (event) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  useEffect(() => {
    const verify = handleCost();
    if (verify === cost) {
      if (cost <= knowledge) {
        setIsBuyable(true);
      }
      if (cost > knowledge) {
        setIsBuyable(false);
      }
    }
    else if (verify === nextCost) {
      if (nextCost <= knowledge) {
        setIsBuyable(true);
      }
      if (cost > knowledge) {
        setIsBuyable(false);
      }
    }
  });

  return (
    <div className={isBuyable ? 'shopitem__container' : 'shopitem__container not-buyable'} onClick={handleClick}>
      <div className="shopitem__left">
        <div className="shopitem__left__img">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152 0H154.2C186.1 0 215.7 16.91 231.9 44.45L256 85.46L280.1 44.45C296.3 16.91 325.9 0 357.8 0H360C408.6 0 448 39.4 448 88C448 102.4 444.5 115.1 438.4 128H480C497.7 128 512 142.3 512 160V224C512 241.7 497.7 256 480 256H32C14.33 256 0 241.7 0 224V160C0 142.3 14.33 128 32 128H73.6C67.46 115.1 64 102.4 64 88C64 39.4 103.4 0 152 0zM190.5 68.78C182.9 55.91 169.1 48 154.2 48H152C129.9 48 112 65.91 112 88C112 110.1 129.9 128 152 128H225.3L190.5 68.78zM360 48H357.8C342.9 48 329.1 55.91 321.5 68.78L286.7 128H360C382.1 128 400 110.1 400 88C400 65.91 382.1 48 360 48V48zM32 288H224V512H80C53.49 512 32 490.5 32 464V288zM288 512V288H480V464C480 490.5 458.5 512 432 512H288z"/></svg>
        </div>
        <p className="shopitem__left_price">{handleCost()}</p>
      </div>
      <div className="shopitem__middle">
        <div className="shopitem__middle__name">{name}</div>
      </div>
      <div className="shopitem__right">
        <button type="button" className="shopitem__right__button" onClick={handleModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/></svg>
        </button>
        <p className="shopitem__right__number">x{number}</p>
      </div>
      { isOpen && (
      <ShopItemDetail
        name={name}
        text={text}
        number={number}
        setIsOpen={setIsOpen}
        handleCost={handleCost}
        idleFlat={idleFlat}
        idlePercent={idlePercent}
        clickFlat={clickFlat}
        clickPercent={clickPercent}
      />
      )}
    </div>
  );
}

ShopItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  nextCost: PropTypes.number,
  number: PropTypes.number,
  idleFlat: PropTypes.number,
  idlePercent: PropTypes.number,
  clickFlat: PropTypes.number,
  clickPercent: PropTypes.number,

};

ShopItem.defaultProps = {
  nextCost: 0,
  number: 0,
  idleFlat: null,
  idlePercent: null,
  clickFlat: null,
  clickPercent: null,
};
