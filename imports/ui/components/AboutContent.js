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
            <div className="col s12 m7">
                <h2 className="header">Horizontal Card</h2>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="http://lorempixel.com/100/190/nature/6"/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutContent;