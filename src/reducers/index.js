import { combineReducers } from 'redux';

import knowledgeReducer from './knowledge';

const rootReducer = combineReducers({
  knowledge: knowledgeReducer,
});

export default rootReducer;
