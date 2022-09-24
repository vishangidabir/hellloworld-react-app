import logo from './logo.jpg'
import React from "react";
import Home from "./components/Home"
import About from "./components/About"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  url = "http://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
      userName: "",
      nameError: "",
    };
  }

  //onClick Function
  onClick = ($event) => {
    console.log("Save button is clicked !", $event);
    window.open(this.url, "_blank");
  };
  onNameChange = (event) => {
    console.log("value is", event.target.value);
    const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    this.setState({ userName: event.target.value });
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: "" });
    } else this.setState({ nameError: "Incorrect name" });
  };
 
  render(){
    return(
      <div>
      <div>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick={this.onclick}
        alt="The Bridgelabz logo : a Bridge to Employment through lab works" />
      </div>
      <div>
        <inpu t onChange={this.onNameChange}/>
        <span className="error-output">{this.state.nameError}</span>
      </div>
      </div>
    );
  }
}

export default App;

