

import { takeEvery} from 'redux-saga/effects';
import { getCities , getCityData , getStoreData} from './getFoodDetails';

export  function* RootSaga(){
    yield takeEvery("GET_CITIES",getCities)
    yield takeEvery("GET-CITY_DATA",getCityData)
    yield takeEvery("GET_STORE_DATA",getStoreData)
}


