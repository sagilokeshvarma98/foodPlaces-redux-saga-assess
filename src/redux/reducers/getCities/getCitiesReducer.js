import citiesAction from './actionTypes'

export const GetCities = (state={people:[]},action)=>{
    if(action.type === citiesAction.GET_CITY_DETAILS){
        return {people : action.cities}
    }
    else{
        return state
    }
}

export const GetCityDetails = (state={store:[]},action)=>{
    if(action.type === "GET_CONTENT"){
        return {store : action.stores}
    } 
    else{
        return state
    }
}

export const getStoreData = (state={store:[]},action)=>{
    console.log(state,action);
    if(action.type === "GET_STORE"){
        return console.log(action.place);
    } 
    else{
        return state
    }
}