import React ,{useState} from 'react';
import './App.css';
import Person from './Person/Person';
const App=()=>
{
  const [personState,setPersonState]=useState(
    {
      persons:[
      {name:'Naman',age:'21'},
      {name:'Mrinali',age:'23'},
      {name:'Yousuf',age:'22'}]
    }
  );

    const switchButtonClickHandler=()=>{
      setPersonState({
        persons:[
          {name:'Naman',age:(Number(personState.persons[0].age)+1).toString()},
          {name:'Mrinali',age:(Number(personState.persons[1].age)+1).toString()},
          {name:'Yousuf',age:(Number(personState.persons[2].age)+1).toString()}]
      });
    }

  return (
  <div class='App'>
    <button onClick={switchButtonClickHandler}>Switch Name</button>
    <Person name ={personState.persons[0].name} age={personState.persons[0].age}/>
    <Person name ={personState.persons[1].name} age={personState.persons[1].age}>Hello</Person>
    {React.createElement(Person ,{name:personState.persons[2].name,age:personState.persons[2].age},null)}
  </div>);
}



export default App;