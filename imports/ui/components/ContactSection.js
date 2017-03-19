/**
 * Created by taylor on 3/12/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

const ContactSection = () => {
  return(
      <div className="row">
          <h2>Contact us today for Air Conditioning service</h2>
          <aside>
              <div className="row">
                  <div className="col s12 m12">
                      <div className="card-panel teal">
                        <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                        </span>
                      </div>
                  </div>
              </div>
              {/*<p>Port Saint Lucie, FL 34953</p>*/}
              {/*<p>Phone: 772-408-4835*/}


                  {/*Fax:      772-224-8508*/}

                  {/*Email: coolingconnection@hotmail.com*/}

                  {/*Business Hours:*/}

                  {/*24-hour emergency service available.*/}

                  {/*We accept:*/}
                  {/*Cash and Personal Checks*/}



                  {/*Licensed and insured.*/}

                  {/*License# CAC1815474</p>*/}
          </aside>
      </div>
  )
};

export default ContactSection;