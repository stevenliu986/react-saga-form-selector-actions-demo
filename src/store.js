import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from './counterReducer.js'
import createSagaMiddleware from 'redux-saga'
import {mySaga} from "./mySaga.js";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {counter: counterReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(mySaga)

