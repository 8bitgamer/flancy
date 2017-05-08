import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { call } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import * as appReducers from 'ducks';
import * as appSagas from 'sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

if (process.env.NODE_ENV !== 'production' && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
        middleware = compose(middleware, window.devToolsExtension());
    }
}

export default createStore(combineReducers({
    ...appReducers,
}), middleware);

sagaMiddleware.run(function *rootSaga() {
    yield Object.values(appSagas).map(saga => call(saga));
});