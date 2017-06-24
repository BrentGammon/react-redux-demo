import React from "react";
import Age from './Age';
import Name from './Name';
import { changeUser, setAge } from '../actions/userActions';
import { requestUser } from '../actions/apiCallsActions';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';



  const mapStateToProps =state => {
     return {
      user: state.user,
      apiCalls: state.apiCalls
  };
}


class App extends React.Component {

  componentWillMount(){
    this.props.dispatch(changeUser('Jimmy',48));
  }

  changeUser(){
    this.props.dispatch(requestUser());
  }

  handleChange(e) {
    const title = e.target.value;
    this.props.dispatch(setAge(title));
  }

  render() {
    return (
      <div>
        <button onClick={this.changeUser.bind(this)}>Get George</button>
        <Name name={this.props.user.name}/>
        <Age age={this.props.user.age}/>
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
        <Link to='/page'>Page</Link>
      </div>
    );
  }
} 

export default connect(mapStateToProps)(App);
