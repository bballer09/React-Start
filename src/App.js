import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
  return React.createElement('div',{className:'App'},React.createElement(Person ,null,null));
}

export default App;