import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';
import axios from 'axios';

const baseURL = "http://localhost:3001/users";
const Animation = posed.div({
    visible : { opacity : 1, applyAtStart : { display : "block"}},
    hidden  : { opacity : 0, applyAtEnd : { display : "none"}}
});

var uniqid = require('uniqid');

class AddUser extends Component {

state = {
    visible : false,
    name : "",
    department : "",
    salary : ""
}

changeVisibility = (e) => {
    this.setState({
        visible : !this.state.visible
    })
}

changeInput = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

addUser = (dispatch, e) => {
    e.preventDefault();
    const {name, department, salary} = this.state;
    const id = uniqid();
    
    const newUser = {
        id : id,
        name : name,
        department : department,
        salary : salary
    }
    axios.post(baseURL, newUser);
    dispatch({type : "ADD_USER", payload : newUser});
}

  render() {
    const {visible, name, department, salary} = this.state;
    return <UserConsumer>
        {value => {
            const {dispatch} = value;
            return (
            <div className='col-md-8 mb-4'>
                <button onClick={this.changeVisibility} className = "btn btn-gray btn-block mb-2">{visible ? "-" : "+"}</button>
                <Animation pose = {visible ? "visible" : "hidden"}>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>User Add Form</h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={this.addUser.bind(this, dispatch)}>
                                <div className='form-group'>
                                    <label htmlFor='name'>Name</label>
                                    <input type='text' name='name' id='name' placeholder='Enter Name' className = 'form-control' 
                                        value={name} onChange={this.changeInput}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='department'>Department</label>
                                    <input type='text' name='department' id='department' placeholder='Enter Department' className = 'form-control' 
                                        value={department}  onChange={this.changeInput}></input>
                                </div>                    
                                <div className='form-group'>
                                    <label htmlFor='salary'>Salary</label>
                                    <input type='text' name='salary' id='salary' placeholder='Enter Salary' className = 'form-control' 
                                        value={salary}  onChange={this.changeInput}></input>
                                </div>
                                <hr/>
                                <button className='btn btn-danger btn-block' type='submit'>Save User</button>
                            </form>
                        </div>
                    </div>
                </Animation>    
            </div>
            )
            }
        }
        </UserConsumer>    
  }
}

export default AddUser;
