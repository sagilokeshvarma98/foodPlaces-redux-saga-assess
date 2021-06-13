import React from 'react'
import MainData from '../../components/MainData/MainData.component'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Contact from '../contact/ContactPage.component'
import About from '../about/AboutPage.component'
import { NoPageFound } from '../nopagefound/NoPageFound.component'
import DisplayStore from '../../components/displayStore/DisplayStore.component'

const HomePage = ()=>{
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
                    </ul>
            </nav>
        </div>
        <Switch>
        <Route exact path='/' component={MainData}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/about' component={About}/>
        <Route path="/:id" component={DisplayStore} />
        <Route component={NoPageFound} />
        </Switch>
    </Router> 
    )
}
export default HomePage