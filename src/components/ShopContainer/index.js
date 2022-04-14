import Shop from '../Shop';

import './style.scss';

export default function ShopContainer() {
  const isOpen = true;
  return (
    <div className="shopcontainer">
      <Shop isOpen={isOpen} />
    </div>
  );
}
