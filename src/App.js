import React from 'react';
//import logo from './logo.svg';
import './App.css';
import  { Component } from "react";
import PropTypes from 'prop-types';
//import './Hide'
// import Autocomplete from './Autocomplete'
class App extends Component {
  state = {
    searchValue: '',
    meals:[]
    };
render() {
  return (
    <div>
    <h1>Welcome to the meal search app</h1>
    <input
        name="text"
        type="text"
        placeholder="Search"
        onChange={event => this.handleOnChange(event)}
        value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>
        {this.state.meals ? (
          <div>
          {this.state.meals.map((meal, index) => (
          <div key={index}>
          <h1>{meal.title}</h1>
          <h2>{meal.description}</h2>
          
          {/* <img src={meal.strMealThumb} alt="meal-thumbnail" /> */}
          </div>
          ))}
          </div>
          ) : (
          <p>Try searching for a meal</p>
          )}
         
    
     
     <h1>React Autocomplete Demo</h1>
     <h2>Start typing and experience the autocomplete wizardry!</h2>
     
  </div>
    );
}

handleOnChange = event => {
  this.setState({ searchValue: event.target.value });
  };


  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
    };
  makeApiCall = searchInput => {
    var searchUrl = `https://i.snssdk.com/search/api/study/?keyword=${searchInput}`;
    fetch(searchUrl)
    .then(response => {
    return response.json();
    })
    .then(jsonData => {
    console.log(jsonData.data);
    this.setState({ meals: jsonData.data });
    });
    
    };
};
//function App() {
 
    //<div className="App">
     // <header className="App-header">
        /* <img src={logo} className="App-logo" alt="logo" /> */
        /* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */
        /* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
      //</header>
      // <div>
      // <h1>Welcome to the meal search app</h1>
      // <input name="text" type="text" placeholder="Search" />
      // <button>Search</button>
      // </div>
   // </div>
     
   
// }


export default App;
