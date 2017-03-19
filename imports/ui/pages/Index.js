/**
 * Created by taylor on 3/4/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';



import NavBar from '../components/NavBar';
import IndexContent from '../components/IndexContent';
import AppFooter from '../components/AppFooter';

const Index = () => {
  return(
      <MuiThemeProvider>
          <div className="container">
              <NavBar/>
              <IndexContent/>
              <AppFooter/>  
          </div>
      </MuiThemeProvider>
  )
};

export default Index;