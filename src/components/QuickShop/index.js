/* eslint-disable max-len */
// npm import
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import QuickShopItem from '../QuickShopItem';

import './style.scss';

export default function QuickShop({ visible, handleClick }) {
  const { generatorsOwned } = useSelector((state) => state.shop);
  const {
    clickFlat,
    clickPercent,
    idleFlat,
    idlePercent,
  } = generatorsOwned;

  return (
    <div className={visible ? 'quickshop__div opened' : 'quickshop__div'}>
      <div className="quickshop" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" /></svg>
      </div>
      <div className={visible ? 'quickshop__block snaps-inline' : 'quickshop__block quickshop-closed'}>
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
