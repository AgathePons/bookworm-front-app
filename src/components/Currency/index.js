import { useSelector } from 'react-redux';

import convertToReadable from '../../selectors';

export default function Currency() {
  const knowledge = useSelector((state) => state.knowledge.knowledge);
  const readableKnowledge = convertToReadable(knowledge);
  return (
    <div className="currency">{readableKnowledge}</div>
  );
}
