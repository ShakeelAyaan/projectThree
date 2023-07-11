// import { createStore, combineReducers } from "react-redux"
import { Reducer } from "./Reducer"
import { createStore } from "redux"
import { combineReducers } from "redux"
import ReducerTwo from "./ReducerTwo"
// import ReducerAddToCard from "./ReducerForAddtoCard"
// import { persistStore , persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { FetchReducer } from "./FetchReducer"
import {FourthReducer} from  './Addreducer'
// import rootReducer from './reducers'
 

const rootReducer = combineReducers({
    Reducer,
  ReducerTwo,
  FetchReducer,
  FourthReducer,
})

// const persistConfig = {
//   key: 'root',
//  storage
// }
 
//  const persistedReducer = persistReducer( rootReducer)
    export const store = createStore(rootReducer)
 
//  export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//  export const persistor = persistStore(store)
