import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import ContactList from './contactList';
import ToggleAdd from "./toggleAdd";
import { v4 as uuidv4 } from 'uuid';



class ContactDashbord extends Component {
    constructor(props) {
        super(props);

        this.handleValueForm = this.handleValueForm.bind(this);
        this.handleUpdateContact = this.handleUpdateContact.bind(this);
        this.handleTrashedContact = this.handleTrashedContact.bind(this);

        this.state = {
            contacts: [
                {id: uuidv4(), first_name: "عرفان", last_name: "قیومی", phone_number: "09355164207"}
            ]
        }
    }

    handleUpdateContact(editedContact, id) {
        let copyContacts =[]
        copyContacts = this.state.contacts.map(contact => ({ ...contact }));

        copyContacts = copyContacts.map(contact => {
            if (contact.id === id) {
                return Object.assign({}, editedContact)
            } else 
                return contact
        });

        this.setState({
            contacts: copyContacts
        });
    }

    handleTrashedContact(id) {
        let trashedContact = this.state.contacts.map(contact => ({ ...contact }));

        trashedContact.map((contact , ind) => {
            if (contact.id === id){
                 return trashedContact.splice(ind,1);                             
            }
            return contact
        });

        this.setState({
            contacts: trashedContact
        });
    }

     handleValueForm(contact) {
        let afterNewContact = []
        afterNewContact = this.state.contacts.map(contact => ({ ...contact }))
        let contactWithId = {};

        Object.assign(contactWithId, {
            id: uuidv4()
        }, contact);

        afterNewContact.push(contactWithId);

        this.setState({
            contacts: afterNewContact
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-center">contact project</h1>

                <ContactList
                    contacts={this.state.contacts}
                    submitFormProps={this.handleUpdateContact}
                    sendTopPropsTrashed={this.handleTrashedContact}
                />

                <ToggleAdd
                    getValueFormProps={this.handleValueForm}
                />

            </div>

        )
    }
}


export default ContactDashbord;
