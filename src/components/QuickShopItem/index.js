import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import convertToReadable from '../../selectors';
import { icones } from '../../assets/images/icon';
import { buyMoreShopItem } from '../../actions/shop';

export default function QuickShopItem({
  id, nextCost, setVisible, icon,
}) {
  const [isBuyable, setIsBuyable] = useState(false);
  const knowledge = useSelector((state) => state.knowledge.knowledge);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (nextCost <= knowledge) {
      return dispatch(buyMoreShopItem(id));
    }
    return console.log('tu es pauvre!');
  };

  useEffect(() => {
    if (nextCost < knowledge) {
      setIsBuyable(true);
    }
    else {
      setIsBuyable(false);
    }
  }, [knowledge]);

  useEffect(() => {
    if (isBuyable) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }, [isBuyable]);

  return (
    <div className={isBuyable ? 'quickshop__block__item' : 'quickshop__block__item is-hidden'} onClick={handleClick}>
      <div className="shopitem__left">
        <div className="shopitem__left__img">
          <img src={icones[icon]} alt="icones" />
        </div>
        <p className="shopitem__left_price">{convertToReadable(nextCost)}</p>
      </div>
    </div>
  );
}

QuickShopItem.propTypes = {
  id: PropTypes.number.isRequired,
  nextCost: PropTypes.number.isRequired,
  setVisible: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};
