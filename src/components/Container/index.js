// components import 
import QuickShop from "../QuickShop";
import Buttons from "../Buttons";

// assets import
import './style.css';

const Container = ({ visible, handleClick, handlePlayerId }) => {
  return (
    <div className="container">
      <Buttons handlePlayerId={handlePlayerId} />
      <QuickShop visible={visible} handleClick={handleClick} />
    </div>
  );
}

export default Container;
