import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    name:"Joseph"
  };

  nameChangeHandler = (event) => {
    this.setState({
      name:event.target.value
    });
  };


  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameChangeHandler}/>
        <UserOutput 
          name={this.state.name}>
        </UserOutput>
        <UserOutput 
          name={this.state.name}>
        </UserOutput>  
        <UserOutput 
          name={this.state.name}>
        </UserOutput>  
        <UserOutput 
          name={this.state.name}>
        </UserOutput>   
      </div>
    );
  }
}

export default App;
