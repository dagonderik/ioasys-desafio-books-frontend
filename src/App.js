//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Signin from './components/Signin/Signin';


class App extends Component {

  // constructor() {
  //   super();
  // }



  render(){
    return (
      <div className="App">
        <Signin/>
      </div>
    );
  }
}

export default App;
