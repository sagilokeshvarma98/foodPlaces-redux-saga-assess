import {sagaActions} from '../reducers/getCities/actionTypes'
export const getCityStores = (data)=>{
   return {
        type:sagaActions.getCityData,
       payload : data.target.value
   }
}


