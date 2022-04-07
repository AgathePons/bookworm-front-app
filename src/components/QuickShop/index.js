// npm import
import PropTypes from 'prop-types';

import './style.css';

export default function QuickShop({ visible, handleClick }) {
  return (
    <div>
      <div className="quickshop" onClick={handleClick}>
        Quickshop
      </div>
      <div className="quickshop__block snaps-inline" style={visible ? { display: 'flex' } : { display: 'none' }}>
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
        <div className="quickshop__block__item" />
      </div>
    </div>
  );
}

QuickShop.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
