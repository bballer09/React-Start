import React ,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component
{

  state={
    persons:[
      {name:'Naman',age:'21'},
      {name:'Mrinali',age:'23'},
      {name:'Yousuf',age:'22'}
    ]
  };
  render() {
    return (
    <div class='App'>
      <Person name ={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}>Hello</Person>
      {React.createElement(Person ,{name:this.state.persons[2].name,age:this.state.persons[2].age},null)}
    </div>);
  }
}
export default App;