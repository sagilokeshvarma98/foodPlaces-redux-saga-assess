import citiesAction from './actionTypes'

export const GetCities = (state={people:[]},action)=>{
    if(action.type === citiesAction.GET_CITY_DETAILS){
        return {people : action.cities}
    }
    else if(action.type === citiesAction.IF_API_FAILED){
        return {people : false}
    }
    else{
        return state
    }
}

export const GetCityDetails = (state={store:[]},action)=>{
    if(action.type === citiesAction.GET_SHOP_DESCRIPTION){
        return {store : action.stores}
    } 
    else{
        return state
    }
}



