
import React from 'react';
import './App.css';
import logo from './logo.jpg'

class App extends React.Component {
  url = 'http://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      userName: '',
      nameError: ''
    }
  }

  // onclick function
  onclick = ($event) => {
    console.log("save button is clicked! ", $event);
    window.open(this.url, "_blank")
  }
  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    // set the title using setState method
    this.setState({userName: event.target.value}) 
    if(nameRegex.test(event.target.value)){
      this.setState({ nameError: '' })
    }else{
      this.setState({nameError: 'Name is Incorrect !' })
    }
  }
  render(){
    return(
      <div>
      <div>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick={this.onclick}
        alt="The Bridgelabz logo : a Bridge to Employment through lab works" />
      </div>
      <div>
        <input onChange={this.onNameChange}/>
        <span className="error-output">{this.state.nameError}</span>
      </div>
      </div>
    );
  }
}

export default App;



