// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';

import knowledgeReducer from './knowledge';
import userReducer from './user';

const rootReducer = combineReducers({
  knowledge: knowledgeReducer,
  user: userReducer,
});

export default rootReducer;
