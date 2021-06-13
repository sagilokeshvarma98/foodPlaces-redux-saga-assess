import React from 'react';
import {withRouter} from 'react-router-dom'

const DisplayStoreContent =({title,imageUrl,id,LowPrice,HighPrice,history,match}) =>{
    const onSelect = ()=>{
        history.push(`${match.url}${title}`,{
            title,
            imageUrl,
            id,
            LowPrice,
            HighPrice
        })
    }
        return(
             <section  className="myStoresDiv" onClick={onSelect}>
                                    <img src={imageUrl} alt={title} />
                                    <div className='contentDiv'>
                                        <h2 className='text text-danger'>{title}</h2>
                                        <h6 className='m-3 text text-dark'>Prices : <b>{LowPrice}-{HighPrice}</b></h6>
                                    </div>
                                </section>
        )
}

export default withRouter(DisplayStoreContent);  