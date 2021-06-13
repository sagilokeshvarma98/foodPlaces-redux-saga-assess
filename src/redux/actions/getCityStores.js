export const getCityStores = (data)=>{
   return {
       type:"GET-CITY_DATA",
       payload : data.target.value
   }
}

export const getStoreData = (data)=>{
    console.log(data);
    return {
        type:"GET_STORE_DATA",
        payload : data
    }
}