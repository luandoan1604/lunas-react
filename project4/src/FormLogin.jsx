import React from "react";

export default class FormLogin extends React.Component{
    constructor(){
        super();
        this.state = {username:"", password:""}
    }
    getUserName = (e)=>{
        this.state.username = e.target.value;
        console.log(this.state);
    }
    getPassword = (e)=>{
        this.state.password = e.target.value;
        console.log(this.state);
    }
    render(){
        const kq =
        <form>
            <div className="mb-3">
                <label>User name</label>
                <input type="text" onChange={this.getUserName} className="form-control"/>
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input type="password" onChange={this.getPassword} className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        return(kq);
    }
}