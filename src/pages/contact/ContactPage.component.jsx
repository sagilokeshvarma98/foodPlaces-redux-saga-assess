import './ContactPage.component.css'
const Contact = ()=>{
    return(
        <div className='ContactPage'>
            <div className='ContactContent text text-primary  m-3'>
                <h2>Contact Us</h2>   
                <p style={{marginTop:"80px"}}><b>foodStores@foodINC.com</b></p> 
                <p><b>+91-5648956152</b></p> 
                <p><b>040-48596125</b></p> 
            </div>
            <img src={'Ottimo Cucina Italiana.jpg'} alt=''/>
        </div>
    )
}

export default Contact