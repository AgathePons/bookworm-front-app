/* eslint-disable max-len */
// npm imports
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// components imports
import StatsItem from '../StatsItem';

// assets imports
import './style.css';

export default function Stats({ isOpen }) {
  const knowledge = useSelector((state) => state.knowledge.knowledge);
  const knowledgePerSecond = useSelector((state) => state.knowledge.knowledgePerSecond);
  const knowledgePerClick = useSelector((state) => state.knowledge.knowledgePerClick);
  const totalOfClicks = useSelector((state) => state.knowledge.totalOfClicks);
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
      <div className="stats__container__block">
        <p className="stat__container__block__name">Total knowledge earned:</p>
        <p className="stat__container__block__value">{knowledge}</p>
        <p className="stat__container__block__name">Total clicks:</p>
        <p className="stat__container__block__value">{totalOfClicks}</p>
        <p className="stat__container__block__name">Knowledge per second:</p>
        <p className="stat__container__block__value">{knowledgePerSecond}</p>
        <p className="stat__container__block__name">Knowledge per click:</p>
        <p className="stat__container__block__value">{knowledgePerClick}</p>

      </div>
      <div className="stats__container__upgrades">
        <p className="stat__container__upgrades__name">Upgrades bought:</p>
        <div className="stat__container__upgrades__items">
          {
            (isLogged && clickFlat[0].length !== 0)
            && clickFlat[0].map((elem) => (
              <StatsItem key={uuidv4()} number={elem.number_owned} name={elem.name} text={elem.text} clickFlat={elem.clic_flat_value} />
            ))
          }
          {
            (isLogged && clickPercent[0].length !== 0)
            && clickPercent[0].map((elem) => (
              <StatsItem key={uuidv4()} number={elem.number_owned} name={elem.name} text={elem.text} clickPercent={elem.clic_percent_value} />
            ))
          }
          {
            (isLogged && idleFlat[0].length !== 0)
            && idleFlat[0].map((elem) => (
              <StatsItem key={uuidv4()} number={elem.number_owned} name={elem.name} text={elem.text} idleFlat={elem.idle_flat_value} />
            ))
          }
          {
            (isLogged && idlePercent[0].length !== 0)
            && idlePercent[0].map((elem) => (
              <StatsItem key={uuidv4()} number={elem.number_owned} name={elem.name} text={elem.text} idlePercent={elem.idle_percent_value} />
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
