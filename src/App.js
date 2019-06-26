import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
  return <div class='App'>
    <Person name ="Naman" age="21"/>
    <Person name ="Mrinali" age="23">Hello</Person>
    {React.createElement(Person ,{name:'Yousuf',age:'22'},null)}
  </div>;
}

export default App;