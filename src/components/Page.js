import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return {
        user: state.user
    }
}

class Page extends Component {
    render(){
        return(
            <div>
           <div>Page</div>
           <div>State is maintain</div>
           <div>{this.props.user.name}</div>
           <div>{this.props.user.age}</div>
           </div>
        )
    }
     
}

export default connect(mapStateToProps) (Page);


