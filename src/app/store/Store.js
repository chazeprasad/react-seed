import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { RootReducer } from './State'
import { Saga } from './Saga'


const middlewares = []
const enhancers = []

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

enhancers.push(applyMiddleware(...middlewares))

const ConfigureStore = () => {
    const store = createStore(RootReducer(), compose(...enhancers))
    sagaMiddleware.run(Saga.Watcher)
    window.store = store;
    return store
}

export const Store = {
    ConfigureStore
}