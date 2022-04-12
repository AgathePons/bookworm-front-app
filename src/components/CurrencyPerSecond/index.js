import PropTypes from 'prop-types';

import convertToReadable from '../../selectors';

export default function CurrencyPerSecond({ idleCounter }) {
  const idleCounterReadable = convertToReadable(idleCounter);
  return (
    <div className="currencypersecond">{idleCounterReadable} per second</div>
  );
}

CurrencyPerSecond.propTypes = {
  idleCounter: PropTypes.number.isRequired,
};
