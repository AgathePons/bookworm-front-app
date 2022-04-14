import Shop from '../Shop';

import './style.css';

export default function ShopContainer() {
  const isOpen = true;
  return (
    <div className="shopcontainer">
      <Shop isOpen={isOpen} />
    </div>
  );
}
