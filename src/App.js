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

  switchButtonClickHandler=()=>{
    this.setState({
      persons:[
        {name:'Naman',age:(Number(this.state.persons[0].age)+1).toString()},
        {name:'Mrinali',age:(Number(this.state.persons[1].age)+1).toString()},
        {name:'Yousuf',age:(Number(this.state.persons[2].age)+1).toString()}]
    });
  }

  render() {
    return (
    <div class='App'>
      <button onClick={this.switchButtonClickHandler}>Switch Name</button>
      <Person 
      name ={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={this.switchButtonClickHandler}
      />
      <Person 
      name ={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchButtonClickHandler}
      >Hello</Person>
      {React.createElement(Person ,
        {name:this.state.persons[2].name,age:this.state.persons[2].age,click:this.switchButtonClickHandler}
      ,null)}
    </div>);
  }
}
export default App;