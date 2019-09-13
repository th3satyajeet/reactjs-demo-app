//import React, { Component } from 'react';
//allows us to use state in functional components

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
//const app = props => {

  state = {
  //const [ this.state, setthis.state ] = useState({
    persons: [
      { name: 'Satyajeet', age: '23' },
      { name: 'Ganesh', age: '22' },
      { name: 'Suresh', age: '26' }
    ],
    otherState: "some other state",
    showPersons: false
  }

  changeNameHandler = (newName) => {
  //const changeNameHandler = () => {
    //for console output
    console.log('Button Clicked!');
  
    this.setState({
    //setthis.state({
      persons: [
        { name: 'Satyajeet', age: '23' },
        { name: newName, age: '22' },
        { name: 'Suresh', age: '26' }
      ],
      students: this.state.students
    })
  }

  changeHandler = (event) => {
    this.setState({
      //setthis.state({
        persons: [
          { name: 'Satyajeet', age: '23' },
          { name: 'Ganesh', age: '22' },
          { name: event.target.value, age: '26' }
        ],
        students: this.state.students
      })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow })
  }
  render() {

    const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }    

    let persons = null;
    if(this.state.showPersons){

    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* <button onClick={ this.changeNameHandler.bind(this, 'Ganesh Ghadei') }>Change Name</button> */}
        <button 
          style = {btnStyle}
          onClick={ this.togglePersonHandler }>Toggle Persons</button>
   
          <div >
            <Person 
              name={ this.state.persons[0].name } 
              age={ this.state.persons[0].age } 
              click = { this.changeNameHandler.bind(this, 'Ghadu Babu!') } />
            <Person 
              name={ this.state.persons[1].name } 
              age={ this.state.persons[1].age } >My Hobbies: Racing</Person>
            <Person 
              name={ this.state.persons[2].name } 
              age={ this.state.persons[2].age } 
              changed = { this.changeHandler }/>
          </div> 
        }
      </div>
    );
  }
}

export default App;