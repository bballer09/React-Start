import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
  return <div>
    <Person name ="Naman"></Person>
    <Person name ="Mohit"></Person>
    {React.createElement(Person ,null,{name:'Yousuf'})}
  </div>;
}

export default App;