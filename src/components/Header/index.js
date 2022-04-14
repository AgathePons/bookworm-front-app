// npm imports
import { useSelector } from 'react-redux';

// components import
import Currency from '../Currency';
import CurrencyPerSecond from '../CurrencyPerSecond';

// assets import
import './style.scss';
import ShopContainer from '../ShopContainer';

function Header() {
  const isDesktop = useSelector((state) => state.desktop.isDesktop);

  return (
    <div className="bigheader">
      <div className="header">
        <h3 className="header__title">Knowledge</h3>
        <Currency />
        <CurrencyPerSecond />
      </div>
      {isDesktop && <ShopContainer />}
    </div>
  );
}

export default Header;
