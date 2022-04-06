// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, compose } from 'redux';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers;

// const enhancers = composeEnhancers(
// applyMiddleware(),
// );

const store = createStore(reducer, enhancers);

export default store;
