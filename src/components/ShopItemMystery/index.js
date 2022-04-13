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
        <div className="shopitem__left__img">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M204.3 32.01H96c-52.94 0-96 43.06-96 96c0 17.67 14.31 31.1 32 31.1s32-14.32 32-31.1c0-17.64 14.34-32 32-32h108.3C232.8 96.01 256 119.2 256 147.8c0 19.72-10.97 37.47-30.5 47.33L127.8 252.4C117.1 258.2 112 268.7 112 280v40c0 17.67 14.31 31.99 32 31.99s32-14.32 32-31.99V298.3L256 251.3c39.47-19.75 64-59.42 64-103.5C320 83.95 268.1 32.01 204.3 32.01zM144 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S166.1 400 144 400z" /></svg>
        </div>
        <p className="shopitem__left_price">???</p>
      </div>
      <div className="shopitem__middle">
        <div className="shopitem__middle__name">???</div>
      </div>
      <div className="shopitem__right">
        <button type="button" className="shopitem__right__button" onClick={handleModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" /></svg>
        </button>
        <p className="shopitem__right__number">x?</p>
      </div>
      {isOpen && (<ShopItemMysteryModal setIsOpen={setIsOpen} />)}
    </div>
  );
}
