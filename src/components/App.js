import React from 'react';
import Characters from './characters/Characters';

// {/* <h1>Rick &amp; Morty Good Funtime</h1> */}
function App() {
  const characters = [
    { name: 'Rick Sanchez', status: 'Alive', species: 'Human', gender: 'Male' },
    { name: 'Morty Smith', status: 'Alive', species: 'Human', gender: 'Male' },
    { name: 'Summer Smith', status: 'Alive', species: 'Human', gender: 'Female' },
    
  ];
  return (
    <>
      <Characters characters={characters}/>
    </>
  ); 
}
export default App;
