/**
 * Created by taylor on 3/4/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router'



const NavBar = () => {
    // $(".button-collapse").sideNav();
    return (
        <div className="row">
            <div className="col s12">
                <nav>
                    <div className="nav-wrapper">
                        <Link to='/'><img id="navbar-logo" src="Logo.png" alt="Cooling Connection Inc"/></Link>
                        <a href="#" data-activates="mobile-demo" className="right button-collapse"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to='/about'>About us</Link></li>
                            <li><a href="badges.html">Services</a></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><a href="sass.html">About us</a></li>
                            <li><a href="badges.html">Services</a></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    )
};

export default NavBar;