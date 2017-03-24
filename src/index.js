import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Saga from './saga';

const sagaMiddleware = createSagaMiddleware();

createStore(
  () => ({}),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(Saga);
