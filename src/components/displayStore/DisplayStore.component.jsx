import React from 'react'

export class DisplayStore extends React.Component{
    render(){
        console.log(this.props.location.state);
    return(
        <div>
            Hello
        </div>
    )
    }
}