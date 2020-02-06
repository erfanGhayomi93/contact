import React, {Component} from 'react';


class plusSign extends Component{
  render(){
    return(
      <div className="h2 p-1 text-center border col-4 offset-4" onClick={this.props.isClick}>+</div>
    )
  }
}


export default plusSign;
