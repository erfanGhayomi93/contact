import React, { Component } from 'react';
import Contact from "./contact";
import FormContact from "./formContact"


class EditedContact extends Component {
  constructor(props) {
    super(props)

    this.ChangeEdited = this.ChangeEdited.bind(this);
    this.CancelEdited = this.CancelEdited.bind(this)

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

  render() {
    const { data } = this.props
    if (this.state.isEdited)
      return <FormContact
        data={data}
        isCancel={this.CancelEdited}
      />

    return <Contact contact={data} edited={this.ChangeEdited} />
  }

}


export default EditedContact;
