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
            <div className='login-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="text-muted">Username</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                        />
                    </div>
                    <button
                        className="btn btn-primary">
                        Log In
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;