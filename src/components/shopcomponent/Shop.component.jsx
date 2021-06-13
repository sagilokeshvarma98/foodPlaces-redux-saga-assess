import React from 'react'
import { connect } from'react-redux'
import { bindActionCreators } from 'redux'
import { getCityStores } from '../../redux/actions/getCityStores'
import './Shop.component.css'
class Shop extends React.Component{ 

   render(){
       let citiesData = this.props.people
    let optionsData = citiesData.map(x=>{
       return <option key={x.id} value={x.id}>{x.cityName}</option>
    })
    return(
        <div id='selectDiv'>
            <select className="form-select" onChange={this.props.getCityStores}>
                <option>Select</option>
               {optionsData}
            </select>
        </div>
    )
   }
}



const stateToProps =(store)=>{
    return {people: store.getCities.people}
}

const mapActiontoProps = (dispatch) =>{
    return bindActionCreators({getCityStores:getCityStores},dispatch)
}

export default connect(stateToProps,mapActiontoProps)(Shop)



