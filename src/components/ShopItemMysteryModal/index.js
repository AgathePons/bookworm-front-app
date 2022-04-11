import PropTypes from 'prop-types';

export default function ShopItemDetail({
  setIsOpen,
}) {
  const handleClick = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="small-modal" onClick={handleClick}>
      <div className="small-modal-container">
        <div className="shopitemdetail">
          <div className="shoitemdetail__header">
            <div className="shoitemdetail__header__img" />
            <p>?</p>
            <button type="button" onClick={handleClick}>x</button>
          </div>
          <div className="shoitemdetail__body">
            <p>?</p>
            <p>BONUS: ?</p>
          </div>
          <div className="shoitemdetail__footer">
            <p>?</p>
            <p>?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ShopItemDetail.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
