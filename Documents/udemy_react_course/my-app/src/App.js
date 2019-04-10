import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Charly', age: 25},
      {name: 'Satan', age: 666},
      {name: 'Lumina', age: 28} 
    ]
  };
  
  switchNameHandler = (newName) => {
    // DONT DO THIS: this.state.persons[0].name = "Charly";
    this.setState({ 
      persons: [
      {name: newName, age: 25},
      {name: 'Satan', age: 333},
      {name: 'Lumina', age: 28}
      ] 
    })
  }

  namedChangedHandler = (event) => {
    this.setState({ 
      persons: [
      {name: 'Charly', age: 25},
      {name: event.target.value, age: 333},
      {name: 'Lumina', age: 28}
      ] 
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      paddinng: '8px',
      cursor: 'pointer'
    }

    //JSX
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
        onClick={ () => this.switchNameHandler("Charles") }
        style={style}
        >Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.namedChangedHandler}/>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click={this.switchNameHandler.bind(this, "Puppy ")}/>
      </div>
    );

    //What it compiles to
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
