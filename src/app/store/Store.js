import { applyMiddleware, createStore, compose } from 'redux'
import { RootReducer } from './RootReducer'


const middlewares = []
const enhancers = []

enhancers.push(applyMiddleware(...middlewares))

const ConfigureStore = () => {
    const store = createStore(RootReducer(), compose(...enhancers))
    window.store = store;
    return store
}

export const Store = {
    ConfigureStore
}