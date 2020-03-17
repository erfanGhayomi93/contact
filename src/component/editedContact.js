import React, {Component} from 'react';
import Contact from "./contact";
import FormContact from "./formContact"


class EditedContact extends Component {
    constructor(props) {
        super(props);

        this.ChangeEdited = this.ChangeEdited.bind(this);
        this.CancelEdited = this.CancelEdited.bind(this);
        this.sendTopPropsEdited = this.sendTopPropsEdited.bind(this)

        this.state = {
            isEdited: false
        }
    }

    ChangeEdited() {
        this.setState(
            {
                isEdited: true
            }
        )
    }

    CancelEdited() {
        this.setState(
            {
                isEdited: false
            }
        )
    }

    sendTopPropsEdited(updateContact,id){
        this.setState(
            {
                isEdited: false
            }
        );

        this.props.topPropsSubmitForm(updateContact,id)
    }

    render() {
        const {data} = this.props;
        if (this.state.isEdited)
            return <FormContact
                data={data}
                isCancel={this.CancelEdited}
                submitFormEditedContact = {this.sendTopPropsEdited}
            />;

        return <Contact
            contact={data}
            edited={this.ChangeEdited}
            trashed = {(id)=>this.props.sendTopPropsTrashed(id)}
        />
    }

}


export default EditedContact;
