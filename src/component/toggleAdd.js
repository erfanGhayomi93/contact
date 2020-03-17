import React, {Component} from 'react';
import PlusSign from './plusSign';
import FormContact from './formContact';


class ToggleAdd extends Component {
    constructor(props) {
        super(props);

        this.handleCancelForm = this.handleCancelForm.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);

        this.state = {
            isOpen: false
        }
    }

    handleAddComponent() {
        this.setState({
            isOpen: true
        })
    }

    handleCancelForm() {
        this.setState({
            isOpen: false
        })
    }

    handleSubmitForm(newContact){
        this.setState({
            isOpen: false
        });

        this.props.getValueFormProps(newContact);
    }

    render() {
        if (!this.state.isOpen) return <PlusSign isClick={this.handleAddComponent.bind(this)}/>;

        return <FormContact
            isCancel={this.handleCancelForm}
            submitFormNewContact = {this.handleSubmitForm}
        />
    }
}


export default ToggleAdd;
