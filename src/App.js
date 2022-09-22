
import React from 'react';
import './App.css';
import logo from './logo.jpg'

class App extends React.Component {
  url = 'http://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      title: 'hello from Bridgelabz'
    }
  }

  // onclick function
  onclick = ($event) => {
    console.log("save button is clicked! ", $event);
    window.open(this.url, "_blank")
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onclick}
        alt="The Bridgelabz logo : a Bridge to Employment through lab works" />
      </div>
    );
  }
}

export default App;



