import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import ContactList from './contactList';
import ToggleAdd from "./toggleAdd";


class ContactDashbord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { id: 1, first_name: "عرفان", last_name: "قیومی", phone_number: "0912-1234567" },
        { id: 2, first_name: "مصطفی", last_name: "برو", phone_number: "0912-7654321" }

      ]
    }
  }
  render() {
    return (
      <div>
        <h1 className="text-center">contact project</h1>

        <ContactList contacts={this.state.contacts} />
        <ToggleAdd />

      </div>

    )
  }
}


export default ContactDashbord;
