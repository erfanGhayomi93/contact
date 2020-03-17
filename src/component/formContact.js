import React, {Component} from 'react';


class formContact extends Component {
    constructor(props) {
        super(props);

        this.handleValue = this.handleValue.bind(this);
        this.submitForm = this.submitForm.bind(this);

        this.state = {
            first_name: "",
            last_name: "",
            phone_number: ""
        }
    }

    componentDidMount() {
        const {data} = this.props;
        if (data) {
            const {first_name, last_name, phone_number} = data;
            this.setState({
                first_name,
                last_name,
                phone_number
            })
        }
    }

    handleValue(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });

    }

    submitForm(e) {
        e.preventDefault();
        if (!this.state.first_name || !this.state.last_name || !this.state.phone_number) {
            return
        }
        const {data} = this.props;
        if (!data)
            this.props.submitFormNewContact(this.state);
        else
            this.props.submitFormEditedContact(this.state, data.id)
    }

    render() {
        const typeForm = this.props.data ? "update" : "create";
        return (
            <form onSubmit={this.submitForm}>
                <div className="col-4 offset-4 border p-1">
                    <div className="form-group text-right" dir="rtl">
                        <input type="text" onChange={this.handleValue} name="first_name" className="form-control mt-3"
                               placeholder="نام"
                               value={this.state.first_name}/>
                        <input type="text" onChange={this.handleValue} name="last_name" className="form-control mt-2"
                               placeholder="نام خانوادگی"
                               value={this.state.last_name}/>
                        <input type="text" onChange={this.handleValue} name="phone_number" className="form-control mt-2"
                               placeholder="شماره تلفن"
                               value={this.state.phone_number}/>
                    </div>
                    <p>
                        <button className="btn btn-success w-50">{typeForm}</button>
                        <button className="btn btn-danger w-50" onClick={this.props.isCancel}>cancel</button>
                    </p>
                </div>
            </form>
        )
    }
}


export default formContact;
