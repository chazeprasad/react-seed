import { combineReducers } from 'redux'
import { HomeReducer } from '../page/home/HomeState'

const RootReducer = () => {
    return combineReducers({
        home: HomeReducer,
    })
}

export { RootReducer }
