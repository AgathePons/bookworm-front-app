// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';

import knowledgeReducer from './knowledge';
import userReducer from './user';
import bookwormReducer from './bookworm';
import shopReducer from './shop';

const rootReducer = combineReducers({
  knowledge: knowledgeReducer,
  user: userReducer,
  bookworm: bookwormReducer,
  shop: shopReducer,
});

export default rootReducer;
