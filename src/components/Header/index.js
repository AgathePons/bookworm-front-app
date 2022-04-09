// npm imports
import { useSelector, useDispatch } from 'react-redux';
import { addKnowledgePerSecond } from 'src/actions/knowledge';

// custom hooks import
import useInterval from '../../hooks/useInterval';

// components import
import Currency from '../Currency';
import CurrencyPerSecond from '../CurrencyPerSecond';

// assets import
import './style.css';

// #region Knowledge converter
function convertToReadable(knowledge) {
  let modifiedNumber;
  let unit;

  if (knowledge < 1e3) return knowledge;

  if (knowledge >= 1e3 && knowledge < 1e6) {
    unit = 'k';
    modifiedNumber = (knowledge / 1e3).toFixed(3);
  }
  else if (knowledge >= 1e6 && knowledge < 1e9) {
    unit = 'M';
    modifiedNumber = (knowledge / 1e6).toFixed(3);
  }
  else if (knowledge >= 1e9 && knowledge < 1e12) {
    unit = 'B';
    modifiedNumber = `${(knowledge / 1e9).toFixed(3)}`;
  }
  else if (knowledge >= 1e12 && knowledge < 1e15) {
    unit = 'T';
    modifiedNumber = `${(knowledge / 1e12).toFixed(3)}`;
  }
  else if (knowledge >= 1e15 && knowledge < 1e18) {
    unit = 'Q';
    modifiedNumber = `${(knowledge / 1e15).toFixed(3)}`;
  }

  const numberToString = modifiedNumber.toString();

  if (numberToString[numberToString.length - 1] === '0') {
    if (numberToString[numberToString.length - 2] === '0') {
      if (numberToString[numberToString.length - 3] === '0') {
        modifiedNumber = Number(modifiedNumber).toFixed(0);
        return `${modifiedNumber}${unit}`;
      }
      modifiedNumber = Number(modifiedNumber).toFixed(1);
      return `${modifiedNumber}${unit}`;
    }
    modifiedNumber = Number(modifiedNumber).toFixed(2);
    return `${modifiedNumber}${unit}`;
  }
  return `${modifiedNumber}${unit}`;
}
// #endregion

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
      <Currency counter={readableKnowledge} />
      <CurrencyPerSecond idleCounter={knowledgePerSecond} />
    </div>
  );
}

export default Header;
