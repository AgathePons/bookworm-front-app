import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { buyShopItem, buyMoreShopItem } from '../../actions/shop';

import './style.css';

export default function ShopItem({
  id, name, cost, nextCost, number,
}) {
  const [isBuyable, setIsBuyable] = useState(false);
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
        <button type="button" className="shopitem__right__button">button</button>
        <p className="shopitem__right__number">x{number}</p>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  nextCost: PropTypes.number.isRequired,
  number: PropTypes.number,
};

ShopItem.defaultProps = {
  number: 0,
};
