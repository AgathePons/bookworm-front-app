// npm imports
import { useSelector, useDispatch } from 'react-redux';
import { addKnowledgePerSecond } from 'src/actions/knowledge';

// custom hooks import
import useInterval from '../../hooks/useInterval';

// components import
import Currency from '../Currency';
import CurrencyPerSecond from '../CurrencyPerSecond';

import convertToReadable from '../../selectors';

// assets import
import './style.scss';

function Header() {
  const dispatch = useDispatch();
  const knowledge = useSelector((state) => state.knowledge.knowledge);
  const knowledgePerSecond = useSelector((state) => state.knowledge.knowledgePerSecond);

  useInterval(() => {
    dispatch(addKnowledgePerSecond());
  }, 1000);

  const readableKnowledge = convertToReadable(knowledge);

  return (
    <div className="header">
      <h3 className="header__title">Knowledge</h3>
      <Currency counter={readableKnowledge} />
      <CurrencyPerSecond idleCounter={knowledgePerSecond} />
    </div>
  );
}

export default Header;
