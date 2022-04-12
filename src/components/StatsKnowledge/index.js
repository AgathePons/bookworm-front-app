import { useSelector } from 'react-redux';

export default function StatsKnowledge() {
  const knowledge = useSelector((state) => state.knowledge.knowledge);
  const knowledgePerSecond = useSelector((state) => state.knowledge.knowledgePerSecond);
  const knowledgePerClick = useSelector((state) => state.knowledge.knowledgePerClick);
  const totalOfClicks = useSelector((state) => state.knowledge.totalOfClicks);
  return (
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
  );
}
