import PropTypes from 'prop-types';
import { useState } from 'react';

import ShopItemModal from '../ShopItemModal';

import { icones } from '../../assets/images/icon';

export default function StatsItem({
  name, text, number, idleFlat, idlePercent, clickFlat, clickPercent, nextCost, cost, icon,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleCost = () => {
    if (number > 0) {
      return nextCost;
    }
    return cost;
  };

  return (
    <div className="item-block" onClick={handleModal}>
      <div className="item-icon">
        <img src={icones[icon]} alt="icones ditem" />
      </div>
      <p className="item-number">{number}</p>
      { isModalOpen && (
        <ShopItemModal
          name={name}
          text={text}
          number={number}
          icon={icon}
          setIsModalOpen={setIsModalOpen}
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

StatsItem.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  idleFlat: PropTypes.number,
  idlePercent: PropTypes.number,
  clickFlat: PropTypes.number,
  clickPercent: PropTypes.number,
  nextCost: PropTypes.number,
  cost: PropTypes.number,
};

StatsItem.defaultProps = {
  idleFlat: 0,
  idlePercent: 0,
  clickFlat: 0,
  clickPercent: 0,
  nextCost: 0,
  cost: 0,
};
