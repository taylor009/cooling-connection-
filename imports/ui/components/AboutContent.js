/**
 * Created by taylor on 3/18/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

const AboutContent = () => {
    return(
        <div className="row">
            <div className="col s12 m8">
                <div className="card">
                    <div className="card-image">
                        <img id="about-pic" src="Logo.png"/>

                    </div>
                    <div className="card-content">
                        <span className="card-title">About the Company</span>
                        <p>Cooling Connection Inc was found by Rober Mckenna in 2006. Cooling Connection
                            is a small family owned and operated business located in Port St Lucie Florida. Founder Bob
                            has been working with HVAC for the past 20 years and is extremely knowledge in the field.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutContent;