import React, {Component} from 'react';

class Name extends Component {
    render(){
        return(
            <h1>Name: {this.props.name}</h1>
        )
    }
}

export default Name;