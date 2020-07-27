import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {userInput:''};
  
  textInputHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  };

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    let updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render () {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)}
        />;
  });

    return (
      <div className="App">
        <p>Your Input: {this.state.userInput}</p>
        <p>Character Count: {this.state.userInput.length}</p>
        <input 
          type="text" 
          onChange={this.textInputHandler} 
          value={this.state.userInput} 
        />
        <Validation
          lettercount={this.state.userInput.length}
        />
        {charList}
      </div>
    );
  }
}

export default App;
