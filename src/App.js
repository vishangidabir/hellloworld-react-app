
import React from 'react';
import './App.css';
import logo from './logo.jpg'

class App extends React.Component {
  url = 'http://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      userName: ''
    }
  }

  // onclick function
  onclick = ($event) => {
    console.log("save button is clicked! ", $event);
    window.open(this.url, "_blank")
  }
  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    // set the title using setState method
    this.setState({userName: event.target.value}) 
  }
  render(){
    return(
      <>
      <div>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick={this.onclick}
        alt="The Bridgelabz logo : a Bridge to Employment through lab works" />
      </div>
      <div>
        <input onChange={this.onNameChange}/>
      </div>
      </>
    );
  }
}

export default App;



