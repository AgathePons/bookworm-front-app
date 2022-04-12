import PropTypes from 'prop-types';
import { useState } from 'react';

import ShopItemModal from '../ShopItemModal';

export default function StatsItem({
  name, text, number, idleFlat, idlePercent, clickFlat, clickPercent,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="item-block" onClick={handleModal}>
      <div className="item-icon" />
      <p className="item-number">{number}</p>
      { isModalOpen && (
        <ShopItemModal
          name={name}
          text={text}
          number={number}
          setIsModalOpen={setIsModalOpen}
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
  idleFlat: PropTypes.number,
  idlePercent: PropTypes.number,
  clickFlat: PropTypes.number,
  clickPercent: PropTypes.number,
};

StatsItem.defaultProps = {
  idleFlat: 0,
  idlePercent: 0,
  clickFlat: 0,
  clickPercent: 0,
};
