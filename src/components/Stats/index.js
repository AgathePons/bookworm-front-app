/* eslint-disable max-len */
// npm imports
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// components imports
import StatsItem from '../StatsItem';
import StatsKnowledge from '../StatsKnowledge';

// assets imports
import './style.scss';

export default function Stats({ isOpen }) {
  const { isLogged } = useSelector((state) => state.user);
  const { generatorsOwned } = useSelector((state) => state.shop);

  const {
    clickFlat,
    clickPercent,
    idleFlat,
    idlePercent,
  } = generatorsOwned;

  return (
    <div className={isOpen ? 'stats__container' : 'stats__container-hidden'}>
      <StatsKnowledge />
      <div className="stats__container__upgrades">
        <div className="stat__container__upgrades__items">
          {
            (isLogged && clickFlat[0].length !== 0)
            && clickFlat[0].map((elem) => (
              <StatsItem
                key={uuidv4()}
                number={elem.number_owned}
                name={elem.name}
                text={elem.text}
                clickFlat={elem.clic_flat_value}
                cost={elem.starting_cost}
                nextCost={elem.next_cost}
                icon={elem.icon}
              />
            ))
          }
          {
            (isLogged && clickPercent[0].length !== 0)
            && clickPercent[0].map((elem) => (
              <StatsItem
                key={uuidv4()}
                number={elem.number_owned}
                name={elem.name}
                text={elem.text}
                clickFlat={elem.clic_flat_value}
                cost={elem.starting_cost}
                nextCost={elem.next_cost}
                icon={elem.icon}
              />
            ))
          }
          {
            (isLogged && idleFlat[0].length !== 0)
            && idleFlat[0].map((elem) => (
              <StatsItem
                key={uuidv4()}
                number={elem.number_owned}
                name={elem.name}
                text={elem.text}
                clickFlat={elem.clic_flat_value}
                cost={elem.starting_cost}
                nextCost={elem.next_cost}
                icon={elem.icon}
              />
            ))
          }
          {
            (isLogged && idlePercent[0].length !== 0)
            && idlePercent[0].map((elem) => (
              <StatsItem
                key={uuidv4()}
                number={elem.number_owned}
                name={elem.name}
                text={elem.text}
                clickFlat={elem.clic_flat_value}
                cost={elem.starting_cost}
                nextCost={elem.next_cost}
                icon={elem.icon}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

Stats.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
