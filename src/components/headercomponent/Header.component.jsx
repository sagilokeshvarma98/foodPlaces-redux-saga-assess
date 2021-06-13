import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import HomePage from '../../pages/homepage/HomePage.component'
import Contact from '../../pages/contact/ContactPage.component'
import About from '../../pages/about/AboutPage.component'
import DisplayStore from '../displayStore/DisplayStore.component'


const Header = ()=>{
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
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={Contact}/>
        <Route path='/contact' component={About}/>
        <Route path="/:id" component={DisplayStore} />
    </Router> 
    )
}

export default Header