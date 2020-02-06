import React, {Component} from 'react';
import EditedContact from "./editedContact"

class ContactList extends Component{
  render(){
    let {contacts} = this.props;
    return(
      <div className="mt-4">
        {
          
        }
        {
          contacts.map(contact => <EditedContact data = {contact} key={contact.id}/>)
        }
        
        
      </div>
    )
  }
}


export default ContactList;
