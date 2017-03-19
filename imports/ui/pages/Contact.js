/**
 * Created by taylor on 3/7/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import NavBar from '../components/NavBar';
import ContactBar from '../components/ContactBar';
import ContactSection from '../components/ContactSection';
import AppFooter from '../components/AppFooter';

const Contact = () => {
    return(
        <MuiThemeProvider>
            <div className="container">
                <NavBar/>
                <ContactSection/>
                <ContactBar/>
                <AppFooter/>
            </div>
        </MuiThemeProvider>
    )
};

export default Contact;