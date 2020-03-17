import React, {Component} from 'react';
import EditedContact from "./editedContact";
import { v4 as uuidv4 } from 'uuid';


class ContactList extends Component {
    render() {
        let {contacts} = this.props;
        return (
            <div className="mt-4">

                {
                    contacts.map(contact => <EditedContact
                        data={contact}
                        key={uuidv4()}
                        topPropsSubmitForm={(contact, id) => this.props.submitFormProps(contact, id)}
                        sendTopPropsTrashed = {(id)=> this.props.sendTopPropsTrashed(id)}
                    />)
                }


            </div>
        )
    }
}


export default ContactList;
