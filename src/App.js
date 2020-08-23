import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <MovieCounter></MovieCounter>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}


function MovieCounter(){

  const [count, setCount] = useState(0)

  const handleCount = () => setCount(count +1)
  
  return(
    <div>
      <button onClick={handleCount}>Add Movie</button>
      <h1>Increase: {count} </h1>
      <MovieCount countMovie={count}></MovieCount>
      <MovieCount countMovie={count +1}></MovieCount>
      <MovieCount countMovie={count +20}></MovieCount>
    </div>
    
  )
}

export default App;


function MovieCount(props){

  return(
    <div>
      <h3>Movie Counter:{props.countMovie} </h3>
    </div>
  )
}