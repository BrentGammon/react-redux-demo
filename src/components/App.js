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

  changeUser(){
    this.props.dispatch(requestUser(Math.floor(Math.random() * 12) + 1));
  }

  handleChange(e) {
    const title = e.target.value;
    this.props.dispatch(setAge(title));
  }

  render() {
    return (
      <div>
        <button onClick={this.changeUser.bind(this)}>Random Name</button>
        <Name name={this.props.user ? this.props.user.name: ''}/>
        <Age age={this.props.user ? this.props.user.age : ''}/>
        <label htmlFor='age'>Change Age: </label>
        <input name="age" value={this.props.user ? this.props.user.age : ''} onChange={this.handleChange.bind(this)} />
        <div>
          <Link to='/page'>Go to /Page for sibling component that receives state</Link>
        </div>
      </div>
    );
  }
} 

export default connect(mapStateToProps)(App);
