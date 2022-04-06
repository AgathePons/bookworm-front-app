import './style.css';

const ShopItem = () => {
  return (
    <div className="shopitem__container">
      <div className="shopitem__left">
        <div className="shopitem__left__img">img</div>
        <p className="shopitem__left_price">999$</p>
      </div>
      <div className="shopitem__middle">
        <div className="shopitem__middle__name">item name</div>
      </div>
      <div className="shopitem__right">
        <button type="button" className="shopitem__right__button">button</button>
        <p className="shopitem__right__number">x99</p>
      </div>
    </div>
  );
}

export default ShopItem;
