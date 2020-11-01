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
                    <div className='nav-container'>
                        <div className="col-2"><p>{userData.username}</p></div>
                        <div className="col-8">
                            <div className="d-flex justify-content-between">
                                <div className="form-group">
                                    <input
                                        name="Text-Box 1"
                                        type="text"
                                        onChange={this.inputBoxOne}
                                        className="form-control"
                                        placeholder="Enter URL/Webpage"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        name="Text-Box 2"
                                        type="text"
                                        className="form-control"
                                        onChange={this.inputBoxTwo}
                                        placeholder="Enter URL/Webpage"
                                    />
                                </div>  
                            </div>                            
                        </div>
                        <div className="col-2 text-right">
                            <button type="button" className="btn btn-primary text-uppercase" onClick={this.handleLogout}>Logout</button>
                        </div>
                    </div>
                    <div className='view-container'>                        
                        <div>
                            <iframe src= {inputValueOne} height="600" width="600" title="Iframe Example" className="view1"></iframe>
                        </div>
                    
                        <div>
                            <iframe src={inputValueTwo} height="600" width="600" title="Iframe Example" className="view1"></iframe>
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