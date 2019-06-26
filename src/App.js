import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
  return <div>
    <Person name ="Naman" age="21"></Person>
    <Person name ="Mrinali" age="23"></Person>
    {React.createElement(Person ,{name:'Yousuf',age:'22'},)}
  </div>;
}

export default App;