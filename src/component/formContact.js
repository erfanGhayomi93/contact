import React, {Component} from 'react';



class formContact extends Component{
  render(){
    const {data} = this.props;
    const {first_name,last_name,phone_number} = data ? data : "";
    const typeForm = this.props.data ? "update" : "create"
    return(
        <div className="col-4 offset-4 border p-1">
          <div className="form-group text-right" dir="rtl">
             <input type="text" className="form-control mt-3" placeholder="نام" defaultValue = {first_name}/>
             <input type="text" className="form-control mt-2" placeholder="نام خانوادگی" defaultValue = {last_name}/>
             <input type="text" className="form-control mt-2" placeholder="شماره تلفن" defaultValue = {phone_number}/>
          </div>
          <p>
            <button className="btn btn-success w-50">{typeForm}</button>
            <button className="btn btn-danger w-50" onClick={this.props.isCancel}>cancel</button>
          </p>
        </div>
    )
  }
}


export default formContact;
