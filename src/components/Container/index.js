import PropTypes from 'prop-types';

// components import
import QuickShop from '../QuickShop';
import Buttons from '../Buttons';

// assets import
import './style.css';

export default function Container({ visible, handleClick }) {
  return (
    <div className="container">
      <Buttons />
      <QuickShop visible={visible} handleClick={handleClick} />
    </div>
  );
}

Container.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
