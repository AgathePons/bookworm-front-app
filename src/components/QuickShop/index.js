/* eslint-disable max-len */
// npm import
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import QuickShopItem from '../QuickShopItem';

import './style.css';

export default function QuickShop({ visible, handleClick }) {
  const { generatorsOwned } = useSelector((state) => state.shop);
  const {
    clickFlat,
    clickPercent,
    idleFlat,
    idlePercent,
  } = generatorsOwned;

  return (
    <div>
      <div className="quickshop" onClick={handleClick}>
        Quickshop
      </div>
      <div className="quickshop__block snaps-inline" style={visible ? { display: 'flex' } : { display: 'none' }}>
        {
          clickFlat[0].length !== 0
            ? clickFlat[0].map((e) => <QuickShopItem key={e.id} id={e.id} cost={e.starting_cost} nextCost={e.next_cost} />)
            : ''
          }
        {
          clickPercent[0].length !== 0
            ? clickPercent[0].map((e) => <QuickShopItem key={e.id} id={e.id} cost={e.starting_cost} nextCost={e.next_cost} />)
            : ''
          }
        {
          idleFlat[0].length !== 0
            ? idleFlat[0].map((e) => <QuickShopItem key={e.id} id={e.id} cost={e.starting_cost} nextCost={e.next_cost} />)
            : ''
          }
        {
          idlePercent[0].length !== 0
            ? idlePercent[0].map((e) => <QuickShopItem key={e.id} id={e.id} cost={e.starting_cost} nextCost={e.next_cost} />)
            : ''
          }
      </div>
    </div>
  );
}

QuickShop.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
