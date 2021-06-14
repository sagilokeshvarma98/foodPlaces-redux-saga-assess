import React from 'react'
import MainData from '../../components/MainData/MainData.component'
import {BrowserRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'
import Contact from '../contact/ContactPage.component'
import About from '../about/AboutPage.component'
import DisplayStore from '../../components/displayStore/DisplayStore.component'
import SignIn from '../../components/signIn/Signin.component'

const HomePage = ()=>{
    let signinkey = sessionStorage.getItem('signKey')
    return(
        <Router>
        <div className='navBarDiv'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                           <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item active">
                           <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item active">
                           <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                        {/* <li className="nav-item active">
                           <Link className="nav-link" to='/signin'>SignIn</Link>
                        </li> */}
                    </ul>
            </nav>
        </div>
        <Switch>
        <Route exact path='/' component={MainData}/>
        <Route path='/contact' component={Contact}/>
        {/* <Route exact path="/signin">
            {signinkey!==null ? <Redirect to="/" /> : <SignIn/>}
        </Route> */}
        <Route path='/about' component={About}/>      
         <Route path="/:id" component={DisplayStore} />
        </Switch>
    </Router> 
    )
}
export default HomePage