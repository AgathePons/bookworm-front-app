// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import userMW from 'src/middlewares/user';
import bookwormMW from 'src/middlewares/bookworm';
import shopMW from 'src/middlewares/shop';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(userMW, bookwormMW, shopMW),
);

const store = createStore(reducer, enhancers);

export default store;
