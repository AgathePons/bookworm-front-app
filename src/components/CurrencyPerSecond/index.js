import { useSelector, useDispatch } from 'react-redux';

// custom hooks import
import { addKnowledgePerSecond } from 'src/actions/knowledge';
import useInterval from '../../hooks/useInterval';
import convertToReadable from '../../selectors';

export default function CurrencyPerSecond() {
  const dispatch = useDispatch();
  const knowledgePerSecond = useSelector((state) => state.knowledge.knowledgePerSecond);
  useInterval(() => {
    dispatch(addKnowledgePerSecond());
  }, 1000);
  const idleCounterReadable = convertToReadable(knowledgePerSecond);
  return (
    <div className="currencypersecond">{idleCounterReadable} per second</div>
  );
}
