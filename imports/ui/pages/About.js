/**
 * Created by taylor on 3/16/17.
 */
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {browserHistory} from 'react-router';

import NavBar from '../components/NavBar';
import AboutContent from '../components/AboutContent';
import AppFooter from '../components/AppFooter';

const About = () => {
    return(
        <MuiThemeProvider>
            <div className="container">
                <NavBar/>
                <AboutContent/>
                <AppFooter/>
            </div>
        </MuiThemeProvider>
    )
};

export default About;