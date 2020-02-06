import React, {Component} from 'react';
import PlusSign from './plusSign';
import FormContact from './formContact';


class ToggleAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleAdd(){
      this.setState({
        isOpen : true
      })
    }

   handleCancelForm(){
      this.setState({
        isOpen : false
      })
    }

    render() {
        if (!this.state.isOpen) return <PlusSign isClick={this.handleAdd.bind(this)} />;

            return <FormContact isCancel={this.handleCancelForm.bind(this)}/>
    }
}


export default ToggleAdd;
