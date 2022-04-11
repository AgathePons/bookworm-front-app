import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { buyShopItem, buyMoreShopItem } from '../../actions/shop';
import ShopItemDetail from '../ShopItemModal';

import './style.css';

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
        <div className="shopitem__left__img">img</div>
        <p className="shopitem__left_price">{handleCost()}</p>
      </div>
      <div className="shopitem__middle">
        <div className="shopitem__middle__name">{name}</div>
      </div>
      <div className="shopitem__right">
        <button type="button" className="shopitem__right__button" onClick={handleModal}>button</button>
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
  nextCost: PropTypes.number.isRequired,
  number: PropTypes.number,
  idleFlat: PropTypes.number,
  idlePercent: PropTypes.number,
  clickFlat: PropTypes.number,
  clickPercent: PropTypes.number,

};

ShopItem.defaultProps = {
  number: 0,
  idleFlat: null,
  idlePercent: null,
  clickFlat: null,
  clickPercent: null,
};
