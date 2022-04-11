/* eslint-disable max-len */
// npm import
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// components import
import ShopItem from '../ShopItem';
import ShopItemMystery from '../ShopItemMystery';

// assets import
import './style.css';

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

  console.log(generatorsOwned);
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
          {/* click flat */}
          {
          clicTabSelected
          && flatTabSelected
          && clickFlat[0].length !== 0
            ? clickFlat[0].map((e) => <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} />)
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
              return <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} />;
            })
            : ''
          }
          {/* click percent */}
          {
          clicTabSelected
          && !flatTabSelected
          && clickPercent[0].length !== 0
            ? clickPercent[0].map((e) => <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} />)
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
              return <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} />;
            })
            : ''
          }
          {/* idle flat */}
          {
          !clicTabSelected
          && flatTabSelected
          && idleFlat[0].length !== 0
            ? idleFlat[0].map((e) => <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} />)
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
              return <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} />;
            })
            : ''
          }
          {/* idle percent */}
          {
          !clicTabSelected
          && !flatTabSelected
          && idlePercent[0].length !== 0
            ? idlePercent[0].map((e) => <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} />)
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
              return <ShopItem key={e.id} id={e.id} name={e.name} cost={e.starting_cost} nextCost={e.next_cost} number={e.number_owned} />;
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
