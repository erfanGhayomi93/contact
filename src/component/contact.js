import React, { Component } from 'react';


class Contact extends Component {
  render() {
    let { contact } = this.props;
    return (
      <div className="border p-3 col-4 offset-4 text-right mt-3 h5">
        <p>
          نام : <span>{contact.first_name}</span>
        </p>

        <p>
          نام خانوادگی : <span>{contact.last_name}</span>
        </p>

        <p>
          شماره تلفن : <span>{contact.phone_number}</span>
        </p>

        <p>
          <button className="btn btn-primary w-50" onClick = {this.props.edited}>edit</button>
          <button className="btn btn-dark w-50">tarsh</button>
        </p>
      </div>
    )
  }
}


export default Contact;
