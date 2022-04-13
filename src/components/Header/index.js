// npm imports
import { useSelector } from 'react-redux';

// components import
import Currency from '../Currency';
import CurrencyPerSecond from '../CurrencyPerSecond';
import Shop from '../Shop';

// assets import
import './style.scss';

function Header() {
  const isDesktop = useSelector((state) => state.desktop.isDesktop);
  const isOpen = true;

  return (
    <div className="bigheader">
      <div className="header">
        <h3 className="header__title">Knowledge</h3>
        <Currency />
        <CurrencyPerSecond />
      </div>
      {isDesktop && <Shop isOpen={isOpen} />}
    </div>
  );
}

export default Header;
