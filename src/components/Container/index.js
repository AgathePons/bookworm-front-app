// components import
import QuickShop from '../QuickShop';
import Buttons from '../Buttons';

// assets import
import './style.css';

function Container({ visible, handleClick }) {
  return (
    <div className="container">
      <Buttons />
      <QuickShop visible={visible} handleClick={handleClick} />
    </div>
  );
}

export default Container;
