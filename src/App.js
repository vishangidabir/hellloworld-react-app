import React from 'react';
import './App.css';
import logo from './logo.jpg'

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      title: 'hello from Bridgelabz'
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo}
        alt="The Bridgelabz logo : a Bridge to Employment through lab works" />
      </div>
    );
  }
}

export default App;


