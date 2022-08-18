import {combineReducers, legacy_createStore } from 'redux'
import {loadingReducer} from './loadingReducer'

const reducers = combineReducers({
    loading: loadingReducer,
})

export const store = legacy_createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
