import './style.css';

function QuickShop({ visible, handleClick }) {
  return (
    <div>
      <div className="quickshop" onClick={handleClick}>
        quickshop
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

export default QuickShop;
