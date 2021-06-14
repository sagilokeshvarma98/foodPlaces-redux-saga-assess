import { render } from '@testing-library/react'
import React , {useState} from 'react'
import './DisplayStore.component.css'
const DisplayStore = (state)=>{
    const [data,useData] = useState(state.location.state.x)
    const [city,useCity] = useState(state.location.state.city)
    return(
        <div className='storeDiv'>
        <img src={data.imageUrl} alt=""/>
        <div className='storeContent'>
            <h2 className='text text-danger'>{city}</h2>
            <h5 className='text text-info' style={{fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Restaurant Name : {data.title}</h5>
            {
                data.description.map(x=><div className='m-3 text text-primary'>{x}</div>)
            }
        </div>
    </div>
    )
}


export default DisplayStore
