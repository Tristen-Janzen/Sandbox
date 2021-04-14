import React, { Component } from 'react';

class Classprop extends Component {
    constructor(props){
        super(props)
        this.state = {
            truck:"brrrrrr"
        }
    }
  render() {
    return <button onClick={() => this.props.setState({brand:"Ford"})}>I am a {this.props.brand}!</button>
  }
}
export default Classprop;