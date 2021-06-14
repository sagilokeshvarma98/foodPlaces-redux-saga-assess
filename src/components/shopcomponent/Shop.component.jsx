import React from 'react'
import { connect } from'react-redux'
import { bindActionCreators } from 'redux'
import { getCityStores } from '../../redux/actions/getCityStores'
import './Shop.component.css'
class Shop extends React.Component{ 

   render(){
       console.log(this.props.people);
    if(this.props.people === false){
       return(
           <div>
               <h1 className='text text-danger'>Json server is not running. Refer to readme file</h1>
           </div>
       )
    }
    else{
        let citiesData = this.props.people
    let optionsData = citiesData.map(x=>{
       return <option key={x.id} value={x.id}>{x.cityName}</option>
    })
    return(
        <div id='selectDiv'>
           <select className="form-select text text-info m-5" onChange={this.props.getCityStores}>
                <option value={null}>Select a city</option>
               {optionsData}
            </select>
        </div>
    )
    }
   }
}



const stateToProps =(store)=>{
    return {people: store.getCities.people}
}

const mapActiontoProps = (dispatch) =>{
    return bindActionCreators({getCityStores:getCityStores},dispatch)
}

export default connect(stateToProps,mapActiontoProps)(Shop)



