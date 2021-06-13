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
        console.log(history);
    }
        return(
            <div onClick={onSelect}> 
            <h2>{title}</h2>
                <img src={imageUrl}  alt="" />
            </div>
        )
}

export default withRouter(DisplayStoreContent);  