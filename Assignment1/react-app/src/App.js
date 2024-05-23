
import './App.css';
import { useState } from 'react';
import  movies  from './movies.json';

// const name = '';
// const year = '';
// const rating = '';

function NavBar() {
  const [loginStatus, setLoginStatus] = useState("login");
  const heading = "Assignment 1";
  function loginHandler() {
    if (loginStatus === "login") {
      setLoginStatus("logout");
    }else {
      setLoginStatus("login");
    }
    console.log(loginStatus)
  };
  return (
    <div>
      <h1>{heading}</h1>
      <button onClick={loginHandler}>{loginStatus}</button>
    </div>
  )
};

function Movie(props) {
  return (
    <ul>
      <h3>{props.name}</h3>
      <li>{props.year}</li> 
      <li>{props.rating}</li>
    </ul>
    
  )
}

function MovieList(props) {
  return (
   <div>
     {props.movies.movies.map((value) => (
      <Movie name={value.name} year={value.year} rating={value.rating} />
    ))}
  
   </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList movies={movies} />
      
    </div>
  );
}

export default App;
