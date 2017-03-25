/**
 * Created by taylor on 3/5/17.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {browserHistory} from 'react-router';

import '../../api/contacts';

export default class ContactBar extends Component{


    submitContact(event){
    event.preventDefault();
    let contacts = ({
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        phoneNumber: this.refs.phoneNumber.value,
        problem: this.refs.problem.value,
        location: this.refs.location.value,
        email: this.refs.email.value,
        createAt: new Date(),
    });
         event.target.reset();

        Meteor.call('insertContacts', contacts, (error) =>{
            if(error) {
                Materialize.toast('An error occured while sending your message: ' + error);
            } else {
                Materialize.toast('Message sent!', 4000);
                browserHistory.push('/');
            }
        });
}



    render(){
        $(document).ready(function() {
            $('select').material_select();
        });
        return(
            <div className="row">
                <form id="contact-sidebar" onSubmit={this.submitContact.bind(this)} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" ref='firstName' type="text" className="validate"/>
                            <label for="icon_prefix">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_telephone" ref='lastName' type="tel" className="validate"/>
                            <label for="icon_telephone">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" ref='phoneNumber' type="tel" className="validate"/>
                            <label for="icon_telephone">Phone Number</label>
                        </div>
                        <div className="input-field col s6">
                            {/*<i className="fa fa-thermometer-full prefix" aria-hidden="true"></i>*/}
                            <select className="multiple " ref='problem'>
                                <optgroup for="icon-prefix" label="Scheduling Repair">
                                    <option value="1">Problem with my unit!</option>
                                </optgroup>
                                <optgroup label="Scheduling Maintenance">
                                    <option value="2">Schedule a repair visit</option>
                                </optgroup>
                            </select>
                            <label>Define Your Problem</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">location_on</i>
                            <input id="location" ref='location' type="text"/>
                            <label for="icon_prefix2">Address</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" ref='email' className="validate"/>
                            <label for="email" data-error="wrong" data-success="right">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button id="submit" className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}






