import axios from 'axios';
import {call,delay,put,} from 'redux-saga/effects'
import citiesAction from '../reducers/getCities/actionTypes'

function getCaller(url){
    return axios.get(url);
}


export function* getCities(){
    try{
        let   response = yield call(getCaller,"http://localhost:5100/places")
        yield put({type:citiesAction.GET_CITY_DETAILS,cities:response.data});
    }
    catch(error){
        console.log(error.message);
    }
}


export function* getCityData(data){
    try{
        let   response = yield call(getCaller,`http://localhost:5100/placeDetails/${data.payload}`)
        yield delay(1000)
        yield put({type:"GET_CONTENT",stores:response.data});
    }
    catch(error){
        yield put({type:"GET_CONTENT",stores:[]});
    }
}


export function* getStoreData(data){
    yield console.log(data.p);
    return {type:"GET_STORE",place:data.payload}
}

