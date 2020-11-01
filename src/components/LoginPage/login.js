import React, { Component } from 'react';

class Login extends Component{

    constructor (props){
        super(props);
            this.state = {}
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const form = new FormData(evt.target);
        console.log(form)
        console.log(evt.target);

        let logInData = {};

        for(let pair of form.entries()){
            logInData[pair[0]] = pair[1];
        }

        console.log(logInData);

        const {username, password} = logInData;

        if(username && password){
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userdata", JSON.stringify(logInData));
            this.props.history.push("/");
        }
    }

    render(){
        return(
            <div className='login'>
                <div className="d-flex">
                    <div className="col-sm-9 col-md-7 col-lg-3 mx-auto card">
                        <h5 className="title-text-center">Log In</h5>
                        <form onSubmit={this.handleSubmit} className="log-in mx-auto">
                            <div className="form-label-group">
                                <label for="username">Username:</label>
                                <input name="username" type="text" className="form-control" placeholder="Enter username"  />
                            </div>
                            <div className="form-label-group">
                                <label for="pwd">Password:</label>
                                <input name="password" className="form-control" placeholder="Enter password" />
                            </div>                               
                            <button type="submit" className="btn btn-lg btn-primary text-uppercase">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;