/* eslint-disable max-len */
// npm import
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// components import
import ShopItem from '../ShopItem';
import ShopItemMystery from '../ShopItemMystery';

// assets import
import './style.scss';

export default function Shop({ isOpen }) {
  const [clicTabSelected, setClicTab] = useState(true);
  // BookwormTabSelected = false
  const [flatTabSelected, setFlatTab] = useState(true);
  // PercentTabSelected = false
  const { generatorsNotOwned, generatorsOwned } = useSelector((state) => state.shop);

  const {
    clickFlat,
    clickPercent,
    idleFlat,
    idlePercent,
  } = generatorsOwned;

  const {
    clickFlatNot,
    clickPercentNot,
    idleFlatNot,
    idlePercentNot,
  } = generatorsNotOwned;

  function handleClicOnTab(e) {
    e.stopPropagation();
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
      default:
    }
  }

  return (
    <div className={isOpen ? 'shop__container' : 'shop__container-hidden'}>
      <div className="shop__container__tabs">
        <button type="button" name="clic" className={clicTabSelected ? 'shop__container__tabs__clic shop__container__tabs__clic--selected' : 'shop__container__tabs__clic'} onClick={handleClicOnTab}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M318.4 304.5c-3.531 9.344-12.47 15.52-22.45 15.52h-105l45.15 94.82c9.496 19.94 1.031 43.8-18.91 53.31c-19.95 9.504-43.82 1.035-53.32-18.91L117.3 351.3l-75 88.25c-4.641 5.469-11.37 8.453-18.28 8.453c-2.781 0-5.578-.4844-8.281-1.469C6.281 443.1 0 434.1 0 423.1V56.02c0-9.438 5.531-18.03 14.12-21.91C22.75 30.26 32.83 31.77 39.87 37.99l271.1 240C319.4 284.6 321.1 295.1 318.4 304.5z"/></svg>
        </button>
        <button type="button" name="bookworm" className={clicTabSelected ? 'shop__container__tabs__bookworm' : 'shop__container__tabs__bookworm shop__container__tabs__bookworm--selected'} onClick={handleClicOnTab}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 96C256 42.98 298.1 0 352 0H390.4C439.9 0 480 40.12 480 89.6V376C480 451.1 419.1 512 344 512C268.9 512 208 451.1 208 376V296C208 273.9 190.1 256 168 256C145.9 256 128 273.9 128 296V464C128 490.5 106.5 512 80 512C53.49 512 32 490.5 32 464V296C32 220.9 92.89 160 168 160C243.1 160 304 220.9 304 296V376C304 398.1 321.9 416 344 416C366.1 416 384 398.1 384 376V192H352C298.1 192 256 149 256 96zM376 64C362.7 64 352 74.75 352 88C352 101.3 362.7 112 376 112C389.3 112 400 101.3 400 88C400 74.75 389.3 64 376 64z"/></svg>
        </button>
      </div>
      <div className="shop__container__nested">
        <div className="shop__container__nested__tabs">
          <button type="button" name="flat" className={flatTabSelected ? 'shop__container__nested__tabs__flat shop__container__nested__tabs__flat--selected' : 'shop__container__nested__tabs__flat'} onClick={handleClicOnTab}>+</button>
          <button type="button" name="percent" className={flatTabSelected ? 'shop__container__nested__tabs__percent' : 'shop__container__nested__tabs__percent shop__container__nested__tabs__percent--selected'} onClick={handleClicOnTab}>%</button>
        </div>
        <div className="shop__container__nested__items__container">
          {/* click flat */}
          {
          clicTabSelected
          && flatTabSelected
          && clickFlat[0].length !== 0
            ? clickFlat[0].map((e) => <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} text={e.text} clickFlat={e.clic_flat_value} />)
            : ''
          }
          {
          clicTabSelected
          && flatTabSelected
          && clickFlatNot[0].length !== 0
            ? clickFlatNot[0].map((e, i) => {
              if (clickFlatNot[0].length > 1 && i !== 0) {
                return <ShopItemMystery />;
              }
              return <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} text={e.text} clickFlat={e.clic_flat_value} />;
            })
            : ''
          }
          {/* click percent */}
          {
          clicTabSelected
          && !flatTabSelected
          && clickPercent[0].length !== 0
            ? clickPercent[0].map((e) => <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} text={e.text} clickPercent={e.clic_percent_value} />)
            : ''
          }
          {
          clicTabSelected
          && !flatTabSelected
          && clickPercentNot[0].length !== 0
            ? clickPercentNot[0].map((e, i) => {
              if (clickPercentNot[0].length > 1 && i !== 0) {
                return <ShopItemMystery />;
              }
              return <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} text={e.text} clickPercent={e.clic_percent_value} />;
            })
            : ''
          }
          {/* idle flat */}
          {
          !clicTabSelected
          && flatTabSelected
          && idleFlat[0].length !== 0
            ? idleFlat[0].map((e) => <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} text={e.text} idleFlat={e.idle_flat_value} />)
            : ''
          }
          {
          !clicTabSelected
          && flatTabSelected
          && idleFlatNot[0].length !== 0
            ? idleFlatNot[0].map((e, i) => {
              if (idleFlatNot[0].length > 1 && i !== 0) {
                return <ShopItemMystery />;
              }
              return <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} text={e.text} idleFlat={e.idle_flat_value} />;
            })
            : ''
          }
          {/* idle percent */}
          {
          !clicTabSelected
          && !flatTabSelected
          && idlePercent[0].length !== 0
            ? idlePercent[0].map((e) => <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} text={e.text} idlePercent={e.idle_percent_value} />)
            : ''
          }
          {
          !clicTabSelected
          && !flatTabSelected
          && idlePercentNot[0].length !== 0
            ? idlePercentNot[0].map((e, i) => {
              if (idlePercentNot[0].length > 1 && i !== 0) {
                return <ShopItemMystery />;
              }
              return <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} text={e.text} idlePercent={e.idle_percent_value} />;
            })
            : ''
          }

        </div>
      </div>
    </div>
  );
}

Shop.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
