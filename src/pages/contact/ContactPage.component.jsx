import { useState,useEffect } from 'react'
import './ContactPage.component.css'
const Contact = ()=>{
    const [cities,setCities] = useState()
    useEffect(()=>{
        fetch(
            'http://localhost:5100/places',
            {
                method : "GET"
            }
        ).then(res=>res.json())
        .then(res=>{
            setCities(res)
        })
        .catch(err=>console.log(err.message))
    },[])
    if(cities){
            return(
                <div className='ContactPage'>
                <div className='ContactContent text text-primary  m-3'>
                    {
                        cities.map(x=><div style={{float:"left"}}>{x.id}  :  {x.cityName}</div>)
                    }
                    <h2>Contact Us</h2>   
                    <p style={{marginTop:"80px"}}><b>foodStores@foodINC.com</b></p> 
                    <p><b>+91-5648956152</b></p> 
                    <p><b>040-48596125</b></p> 
                </div>
                <img src={'Ottimo Cucina Italiana.jpg'} alt=''/>
            </div>
            )
    }
    else
    return(
        <div>
            Loading...
        </div>
    )
}

export default Contact