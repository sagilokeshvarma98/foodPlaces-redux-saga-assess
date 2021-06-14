
import {sagaActions} from '../reducers/getCities/actionTypes'
import { takeEvery} from 'redux-saga/effects';
import { getCities , getCityData } from './getFoodDetails';

export  function* RootSaga(){
    yield takeEvery(sagaActions.getCities,getCities)
    yield takeEvery(sagaActions.getCityData,getCityData)
}


