// custom hooks import
import useInterval from '../../hooks/useInterval';

// components import 
import Currency from '../Currency';
import CurrencyPerSecond from '../CurrencyPerSecond';

// assets import
import './style.css';

const Header = ({ count, setCount, idleCount }) => {

  useInterval(() => {
    setCount(count + idleCount);
  }, 1000);

  return (
    <div className="header">
      <Currency counter = {count} />
      <CurrencyPerSecond idleCounter={ idleCount } />
    </div>
  );
}

export default Header;
