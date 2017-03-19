/**
 * Created by taylor on 3/6/17.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

const AppFooter = () => {
    return(
        <div className="row">
            <div className="col s12">
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">We Accept</h5>
                                <i id="payment-icons" className="fa fa-cc-amex" aria-hidden="true">Amex</i>
                                <i id="payment-icons" className="fa fa-cc-mastercard" aria-hidden="true">Master Card</i>
                                <i id="payment-icons" className="fa fa-cc-discover">Discover Card</i>
                                <i id="payment-icons" className="fa fa-cc-visa" aria-hidden="true">Visa</i>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2014 Copyright Text
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
};

export default AppFooter;