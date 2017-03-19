/**
 * Created by taylor on 3/10/17.
 */
import { Meteor } from 'meteor/meteor';
import { Contacts } from '../imports/api/contacts';

Meteor.methods({
    insertContacts(contacts) {
        Contacts.insert(contacts);
    },

    updateContact(contacts) {
        Contacts.update(contacts._id,
            { $set: contacts});
    },

    deleteContact(contactsId) {
        Contacts.remove(contactsId);
    }
});