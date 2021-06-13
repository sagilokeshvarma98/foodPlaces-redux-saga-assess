import ShopInCities from '../../components/shopcomponent/Shop.component'
import { connect } from'react-redux'

const stateToProps =(store)=>{
    return {people: store.getCities.people}
}


export const APIHoc = connect(stateToProps,null)(ShopInCities)