import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import convertToReadable from '../../selectors';

import { buyMoreShopItem } from '../../actions/shop';

export default function QuickShopItem({
  id, nextCost,
}) {
  const knowledge = useSelector((state) => state.knowledge.knowledge);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (nextCost <= knowledge) {
      return dispatch(buyMoreShopItem(id));
    }
    return console.log('tu es pauvre!');
  };

  return (
    <div className="quickshop__block__item" onClick={handleClick}>
      <div className="shopitem__left">
        <div className="shopitem__left__img">img</div>
        <p className="shopitem__left_price">{convertToReadable(nextCost)}</p>
      </div>
    </div>
  );
}

QuickShopItem.propTypes = {
  id: PropTypes.number.isRequired,
  nextCost: PropTypes.number.isRequired,
};
