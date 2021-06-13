import React from 'react'
import FoodStores from '../../components/foodStores/FoodStores.component'
import ShopInCities from '../../components/shopcomponent/Shop.component'

const HomePage = ()=>{
    return(
        <div>
            <ShopInCities/>
            <FoodStores/>
        </div>
    )
}
export default HomePage