import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {


  state  = {
    users: [
      {
        id: 1, 
        name: "Atlas",
        department: "IT",
        salary: "5000"
      },
      {
        id: 2,
        name: "Melisa",
        department: "HR",
        salary: "6000"
      },
      {
        id: 3,
        name: "Sare",
        department: "CEO office",
        salary: "15000"
      }
    ]
  }
  
  render() {
  return (
    <div className="container">
      <Navbar title= "Users"></Navbar> 
      <hr/>
      <Users users = {this.state.users}/>
    </div>
  );
}
}

export default App;
