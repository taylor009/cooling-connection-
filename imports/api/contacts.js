/**
 * Created by taylor on 3/9/17.
 */
import { Mongo } from 'meteor/mongo';

export const Contacts = new Mongo.Collection('contacts');

Contacts.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; }
});

const ContactSchema = new SimpleSchema({
    firstName: {
        type: String,
        optional: false
    },
    lastName: {type: String},
    phoneNumber: {
        type: String,
        regEx: /(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
    },
    problem: {type: Number},
    location:{type: String},
    email: {
        type: String,
    },

});

Contacts.attachSchema(ContactSchema);