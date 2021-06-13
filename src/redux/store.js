import { combineReducers } from 'redux';
import {GetCities , GetCityDetails} from './reducers/getCities/getCitiesReducer'


export const appstate= combineReducers({
    getCities : GetCities,
    getCityStores : GetCityDetails
})

