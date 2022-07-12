import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {

    state = {
        isVisible : false
    }

    static defaultProps = {
        name :  "No Name",
        department : "N/A",
        salary : "N/A"
    } 

    onClickEvent = (e) => {
        // console.log(e.target);
        // console.log("test");

        this.setState({
            isVisible : !this.state.isVisible 
        })
    }


  render() {
    //Destructing
    const {name,department,salary} = this.props;
    const {isVisible} = this.state;

    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
            <div className='card-header d-fles justify-content-between'>
                {/* <h4 className='d-inline' onClick={this.onClickEvent.bind(this)}>{name}</h4>  */}
                <h4 className='d-inline' onClick={this.onClickEvent}>{name}</h4> 
                <i className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
            </div>
        </div>
        {
            isVisible ? <div className='card-body'>
                            <p className='card-text'>Department: {department}</p>
                            <p className='card-text'>Salary: {salary}</p>
                            <p>{this.state.test}</p>
                        </div> 
                        : null
        }
        
      </div>
    )
  }
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired
}

export default User;
