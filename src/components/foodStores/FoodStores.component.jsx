import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStoreData } from "../../redux/actions/getCityStores";
import './FoodStores.component.css'
import {withRouter} from 'react-router-dom'

export const FoodStores = ({cityFoodStores,getStoreData,history,match})=>{
 
   if(cityFoodStores.length===0){
    return(
        <h1>Please select a city to get food stores</h1>
    )
   }
   else{
       let storeData = cityFoodStores.foodPlaces.map(x=>{
           return <section key={x.id} className="myStoresDiv" onClick={()=>{
            history.push(`${match.url}${x.title}`,{
              x
            })
            console.log(x,history.location,match);
        }
           }>
                        <img src={process.env.PUBLIC_URL + `/${x.imageUrl}`} alt={x.title} />
                        <div className='contentDiv'>
                            <h2 className='text text-danger'>{x.title}</h2>
                            <h6 className='m-3 text text-dark'>Prices : <b>{x.LowPrice}-{x.HighPrice}</b></h6>
                        </div>
                    </section>
       })
    return(
        <div>
            {storeData}
        </div>
    )
   }
    
}

const getStores = (store)=>{
    return {cityFoodStores:store.getCityStores.store}
}

const mapActiontoProps = (dispatch) =>{
    return bindActionCreators({getStoreData:getStoreData},dispatch)
}

export default connect(getStores,mapActiontoProps)(withRouter(FoodStores))


















// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { getStoreData } from "../../redux/actions/getCityStores";
// import './FoodStores.component.css'
// import DisplayStoreContent from '../DisplayStoreContent/DisplayStoreContent.component' 
// export const FoodStores = ({cityFoodStores,getStoreData})=>{
//    if(cityFoodStores.length===0){
//     return(
//         <h1>Please select a city to get food stores</h1>
//     )
//    }
//    else{
//    return(
//     <div className="directory-menu">
//     {
//       cityFoodStores.foodPlaces.map((x)=>{
//        return <DisplayStoreContent key={x.id} {...x}/>
//       })
//     }
//   </div>
//    )
//    }
    
// }

// const getStores = (store)=>{
//     return {cityFoodStores:store.getCityStores.store}
// }

// const mapActiontoProps = (dispatch) =>{
//     return bindActionCreators({getStoreData:getStoreData},dispatch)
// }

// export default connect(getStores,mapActiontoProps)(FoodStores)


