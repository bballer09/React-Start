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

  switchButtonClickHandler=(newName)=>{
    this.setState({
      persons:[
        {name:newName,age:(Number(this.state.persons[0].age)+1).toString()},
        {name:'Mrinali',age:(Number(this.state.persons[1].age)+1).toString()},
        {name:'Yousuf',age:(Number(this.state.persons[2].age)+1).toString()}]
    });
  }

  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:'Naman',age:(Number(this.state.persons[0].age)+1).toString()},
        {name:event.target.value,age:(Number(this.state.persons[1].age)+1).toString()},
        {name:'Yousuf',age:(Number(this.state.persons[2].age)+1).toString()}]
    });
  }

  render() {

    const style={
      'background-color':'blue',
      cursor:'pointer',
      border:'1px solid grey'
    }
    return (
    <div class='App'>
      <button style={style} onClick={()=>this.switchButtonClickHandler('Naman')}>Switch Name</button>
      <Person 
      name ={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={this.switchButtonClickHandler.bind(this,'Chaman')}
      />
      <Person 
      name ={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchButtonClickHandler.bind(this,'Chaman')}
      type ={this.nameChangeHandler}>
        Hello</Person>
      {React.createElement(Person ,
        {name:this.state.persons[2].name,age:this.state.persons[2].age,click:this.switchButtonClickHandler.bind(this,'Chaman')}
      ,null)}
    </div>);
  }
}
export default App;