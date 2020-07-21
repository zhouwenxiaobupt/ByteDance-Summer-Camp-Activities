import React from 'react';

//import logo from './logo.svg';
import './App.css';
import ReactFetchAutocomplete from "react-fetch-autocomplete";
import  { Component } from "react";
import PropTypes from 'prop-types';
//import userslist from 'userslist'
//import './Hide'
// import Autocomplete from './Autocomplete'
class App extends Component {
  state = {
    searchValue: '',
    meals:[],
    com:'',
  
    };
    constructor(props) {
      super(props);
      this.state = {count: 0};
      this.handleClick = this.handleClick.bind(this);
  }
  
render() {
  return (
    <div>
    <h1>Welcome to the simple bytedance search app</h1>
    <input
        name="text"
        type="text"
        id="text"
        placeholder="Search"
        onChange={event => this.handleOnChange(event)}
        value={this.state.searchValue}
        />
          <button key="2" onClick={(event) => { this.handleClickup();this.handleSearch ();}}>上一页
        </button>
        <button onClick={this.handleSearch}>Search</button>
        <button key="1" onClick={(event) => { this.handleClick();this.handleSearch ();}}>下一页
        </button>
        {this.state.meals ? (
          <div>
          {this.state.meals.map((meal, index) => (
          <div key={index}>
          <h1>{meal.title}</h1>
          <h2>{meal.description}</h2>
          <h2>作者：{meal.user_name}</h2>
          <h3>评论数：{meal.comments_count}</h3>
          <h3>原链接：{meal.link_url}</h3>
          <h3>电话：{meal.create_time}</h3>
          <div className='app'>
    
 

    </div>
          
          {/* <img src={meal.strMealThumb} alt="meal-thumbnail" /> */}
          </div>
          ))}
          </div>
          ) : (
          <p>Try searching for a data</p>
          )}
         
    
         
     
  
     
  </div>
    );
}

handleOnChange = event => {
  this.setState({ searchValue: event.target.value });
  };
  handleClick() {
    this.setState((state) => {
        return {count: state.count + 1};
    });
};
handleClickup() {
  this.setState((state) => {
      return {count: state.count - 1};
  });
}
  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
    };
  makeApiCall = searchInput => {
  var i=1;
   
    var searchUrl = `https://i.snssdk.com/search/api/study/?keyword=${searchInput}&offset=${this.state.count}`;
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
