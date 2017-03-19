/**
 * Created by taylor on 3/4/17.
 */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route,  browserHistory } from 'react-router';

injectTapEventPlugin();

import Index from '../../ui/pages/Index';
import Contact from '../../ui/pages/Contact';
import About from '../../ui/pages/About';

Meteor.startup(() => {
   render((
       <Router history={browserHistory}>
           <Route path='/' component={Index}/>
           <Route path='/about' component={About}/>
           <Route path='/contact' component={Contact}/>
       </Router>
   ),document.getElementById('render-target'))
});