/**
 * Created by taylor on 3/4/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import ContactBar from '../components/ContactBar';

const IndexContent = () => {
    return (
        <div className="row">
            <div className="col s12 m12 12">
                <section className="main-section">
                    <div className="s12 m7 7">
                        <h4>The right choice for Air Conditioning service</h4>
                    </div>
                    <img className="thermostat-img col m6" src="thermostat.jpg" alt="Thermostat"/>
                    <p id="main-content">At Cooling Connection Inc. our goal is to provide outstanding air conditioning
                        installation, repair and maintenance services at the best prices.</p>
                    <p id="main-content">Cooling Connection Inc. has been the trusted name in quality heating and air
                        conditioning services in Port St. Lucie and nearby areas in Florida since 2006. We offer
                        first-rate heater repairs, air conditioning system repairs, duct replacements, maintenance
                        agreements, as well as installation of all types of AC system makes and models.</p>
                    <p id="main-content">Servicing homes and commercial establishments in Palm City, Stuart, Hope Sound,
                        Fort Pierce and Port St. Lucie our business is built on trust and has grown through word of
                        mouth from customers who have experienced our top quality service first hand. We believe in
                        building business relationships that last a lifetime which is why we deliver fast, friendly,
                        quality work that's priced as low as possible. We understand that excellent customer service
                        should be top priority and that our client’s satisfaction is of utmost importance.</p>
                    <p id="main-content">With Cooling Connection Inc., you're always assured that you're in good hands.
                        Our highly trained and capable staff with over 18 years of experience in AC trade is on call 24
                        hours for emergency AC repair in Port St. Lucie. We also provide free estimates for all types of
                        air conditioning unit replacements as well as a 12-month zero interest financing deal on AC
                        replacements, duct replacement and design services.</p>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">We provide 100% financing on repairs and equipment, equivalent to cash programs.</span>
                                <Divider/>
                                <p>Get in touch with us today for all your AC and heater repair/replacement needs and
                                    experience the finest, Florida air conditioning has to offer!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Customer FeedBack</span>
                                <Divider/>
                                <h6>Joan L. in Stuart Says</h6>
                                <p>"The repair company sent a service man out quickly, he was super, very courteous, fixed
                                    my ac quickly and did not try to push any unneeded repairs. As a widow living alone i
                                    sure appreciated that."</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ContactBar/>
        </div>
    )
};

export default IndexContent;

