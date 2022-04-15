import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import convertToReadable from '../../selectors';

import { buyShopItem, buyMoreShopItem } from '../../actions/shop';
import ShopItemModal from '../ShopItemModal';

import { icones } from '../../assets/images/icon';

import './style.scss';

export default function ShopItem({
  id, name, cost, nextCost, number, text, clickFlat, clickPercent, idleFlat, idlePercent, icon,
}) {
  const [isBuyable, setIsBuyable] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const knowledge = useSelector((state) => state.knowledge.knowledge);
  console.log(icones);
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
    setIsModalOpen(true);
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
    <>
      <div className={isBuyable ? 'shopitem__container' : 'shopitem__container not-buyable'} onClick={handleClick}>
        <div className="shopitem__left">
          <div className="shopitem__left__img">
            <img src={icones[icon]} alt="icone" />
          </div>
          <p className="shopitem__left_price">{convertToReadable(handleCost())}</p>
        </div>
        <div className="shopitem__middle">
          <div className="shopitem__middle__name">{name}</div>
        </div>
        <div className="shopitem__right">
          <button type="button" className="shopitem__right__button" onClick={handleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" /></svg>
          </button>
          <p className="shopitem__right__number">x{number}</p>
        </div>
      </div>
      { isModalOpen && (
      <ShopItemModal
        name={name}
        text={text}
        number={number}
        setIsModalOpen={setIsModalOpen}
        handleCost={handleCost}
        idleFlat={idleFlat}
        idlePercent={idlePercent}
        clickFlat={clickFlat}
        clickPercent={clickPercent}
      />
      )}
    </>
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
