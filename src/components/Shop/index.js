// npm import
import { useState } from 'react';

// components import
import ShopItem from '../ShopItem';

// assets import
import './style.css';

function Shop({ isOpen }) {
  const [clicTabSelected, setClicTab] = useState(true);
  const [flatTabSelected, setFlatTab] = useState(true);

  function handleClicOnTab(e) {
    switch (e.target.name) {
      case 'clic':
        setClicTab(true);
        break;
      case 'bookworm':
        setClicTab(false);
        break;
      case 'flat':
        setFlatTab(true);
        break;
      case 'percent':
        setFlatTab(false);
        break;
    }
  }

  return (
    <div className={isOpen ? 'shop__container' : 'shop__container-hidden'}>
      <div className="shop__container__tabs">
        <button type="button" name="clic" className={clicTabSelected ? 'shop__container__tabs__clic shop__container__tabs__clic--selected' : 'shop__container__tabs__clic'} onClick={handleClicOnTab}>clic</button>
        <button type="button" name="bookworm" className={clicTabSelected ? 'shop__container__tabs__bookworm' : 'shop__container__tabs__bookworm shop__container__tabs__bookworm--selected'} onClick={handleClicOnTab}>bookworm</button>
      </div>
      <div className="shop__container__nested">
        <div className="shop__container__nested__tabs">
          <button type="button" name="flat" className={flatTabSelected ? 'shop__container__nested__tabs__flat shop__container__nested__tabs__flat--selected' : 'shop__container__nested__tabs__flat'} onClick={handleClicOnTab}>+</button>
          <button type="button" name="percent" className={flatTabSelected ? 'shop__container__nested__tabs__percent' : 'shop__container__nested__tabs__percent shop__container__nested__tabs__percent--selected'} onClick={handleClicOnTab}>%</button>
        </div>
        <div className="shop__container__nested__items__container">
          <ShopItem />
          <ShopItem />
        </div>
      </div>
    </div>
  );
}

export default Shop;
