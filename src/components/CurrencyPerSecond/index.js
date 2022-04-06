import PropTypes from 'prop-types';

export default function CurrencyPerSecond({ idleCounter }) {
  return (
    <div className="currencypersecond">{idleCounter} per second</div>
  );
}

CurrencyPerSecond.propTypes = {
  idleCounter: PropTypes.number.isRequired,
};
