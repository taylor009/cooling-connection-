import { Meteor } from 'meteor/meteor';
import {Contacts} from '../imports/api/contacts';

Meteor.startup(() => {
  // code to run on server at startup
    Meteor.publish('contacts', function(){
        return Contacts.find({});
    })
});
