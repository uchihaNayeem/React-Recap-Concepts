import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let namea = [
    {id: 'salam', age:20},
    {id: 'barkat', age:30},
    {id: 'jabbar', age:40}

   ]

   let students = [
    {id: 1, class: 5, name: 'Raju'},
    {id: 2, class: 4, name: 'Akash'},
    {id: 3, class: 6, name: 'Boby'},
    {id: 4, class: 10, name: 'Oli'},
    {id: 5, class: 2, name: 'olodama'},
  ]

   

  return (
    <div className="App">

      <CountMovie/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          
          {/* 33.10 nije nije practice */}
        {
          students.map(ss => <School sName={ss.name} sClass={ss.class} sId={ss.id}></School>)
        }
      

      </header>
    </div>
  );
}



function CountMovie(){
  const [countVar, setCountFunc] = useState(0)
  const addOnClick = () => setCountFunc(countVar + 1)

  return(
    <div onClick={addOnClick}>
      <button>Add Movie</button>
      <h1>Movie Counter: {countVar} </h1>

      <AnotherMovie mName={countVar}></AnotherMovie>
      <AnotherMovie mName={countVar}></AnotherMovie>
      <AnotherMovie mName={countVar}></AnotherMovie>

    </div>
  )
}

function AnotherMovie(props){

  return(
    <div>
      <h3>This is another: {props.mName}</h3>
    </div>
  )
}


// 33.10 nijer moto practice

function School(props){

  let schoolStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '5px',
    borderRadius: '10px'
  }

  return(
    <div style={schoolStyle}>
      <h1>Human Name:{props.sName}</h1>
      <h3>class is: {props.sClass} </h3>
      <p>He's id is: {props.sId} </p>
    </div>
  )
}









export default App;


