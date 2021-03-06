import { useSelector } from 'react-redux';
import convertToReadable from '../../selectors';

export default function StatsKnowledge() {
  const knowledge = useSelector((state) => state.knowledge.knowledge);
  const knowledgePerSecond = useSelector((state) => state.knowledge.knowledgePerSecond);
  const knowledgePerClick = useSelector((state) => state.knowledge.knowledgePerClick);
  const totalOfClicks = useSelector((state) => state.knowledge.totalOfClicks);
  return (
    <div className="stats__container__block">
      <p className="stat__container__block__name">Knowledge owned:</p>
      <p className="stat__container__block__value">{convertToReadable(knowledge)}</p>
      <p className="stat__container__block__name">Total clicks:</p>
      <p className="stat__container__block__value">{totalOfClicks}</p>
      <p className="stat__container__block__name">Knowledge per second:</p>
      <p className="stat__container__block__value">{convertToReadable(knowledgePerSecond)}</p>
      <p className="stat__container__block__name">Knowledge per click:</p>
      <p className="stat__container__block__value">{convertToReadable(knowledgePerClick)}</p>
      <p className="stat__container__block__name">Upgrades bought:</p>
    </div>
  );
}
