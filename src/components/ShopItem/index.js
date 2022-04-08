import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { buyShopItem, buyMoreShopItem } from '../../actions/shop';

import './style.css';

export default function ShopItem({
  id, name, cost, nextCost, number,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (number === 0) {
      dispatch(buyShopItem(id));
    }
    dispatch(buyMoreShopItem(id));
  };
  const handleCost = () => {
    if (number > 0) {
      return nextCost;
    }
    return cost;
  };

  return (
    <div className="shopitem__container" onClick={handleClick}>
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
