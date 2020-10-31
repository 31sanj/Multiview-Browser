import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValueOne: '',
            inputValueTwo: ''
        };

        this.inputBoxOne = this.inputBoxOne.bind(this);
        this.inputBoxTwo = this.inputBoxTwo.bind(this);
    }

    inputBoxOne = (evt) => {
        this.setState({inputValueOne: evt.target.value})
    }

    inputBoxTwo = (evt) => {
        this.setState({ inputValueTwo: evt.target.value })
    }

    handleLogout = () => {
        localStorage.setItem("isLoggedIn", false);
        this.props.history.push("/login");
    }

    render() {
        
        const {inputValueOne , inputValueTwo}= this.state;

        const isLoggedIn = localStorage.getItem("isLoggedIn");
        let userData = localStorage.getItem("userdata");
        userData = JSON.parse(userData)
        console.log(isLoggedIn)
        console.log(userData)

        if (isLoggedIn) {

            return (
                <div className='main-container'>
                    <div className='nav-container justify-space-between'>
                        <div><p>{userData.username}</p></div>
                        <div className="form-group">
                            <input
                                name="Text-Box 1"
                                type="text"
                                onChange={this.inputBoxOne}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="Text-Box 2"
                                type="text"
                                className="form-control"
                                onChange={this.inputBoxTwo}
                            />
                        </div>
                        <button type="button" onClick={this.handleLogout}>Logout</button>
                    </div>
                    <div className='view-container'>
                        <div className="d-flex">
                           <div className="col-sm-6">
                                <div>
                                    <iframe src= {inputValueOne} height="200" width="300" title="Iframe Example"></iframe>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <iframe src= {inputValueTwo} height="200" width="300" title="Iframe Example"></iframe>
                                </div>
                            </div>
                        </div>              
                        
                    </div>
                </div>)
        }
        else {
            return <Redirect to="/login" />
        }
    }
}

export default Main;