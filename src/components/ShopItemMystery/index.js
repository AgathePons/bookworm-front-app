import { useState } from 'react';

import ShopItemMysteryModal from '../ShopItemMysteryModal';

export default function ShopItemMystery() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (event) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <div className="shopitem__container mystery">
      <div className="shopitem__left">
        <div className="shopitem__left__img">?</div>
        <p className="shopitem__left_price">???</p>
      </div>
      <div className="shopitem__middle">
        <div className="shopitem__middle__name">???</div>
      </div>
      <div className="shopitem__right">
        <button type="button" className="shopitem__right__button" onClick={handleModal}>?</button>
        <p className="shopitem__right__number">x?</p>
      </div>
      {isOpen && (<ShopItemMysteryModal setIsOpen={setIsOpen} />)}
    </div>
  );
}
