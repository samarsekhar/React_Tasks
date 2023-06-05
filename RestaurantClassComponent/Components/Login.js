import React, { Component } from "react";

class Login extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            password:"",

        }
    }
    login(){
        console.log(this.state)
        fetch("http://localhost:3000/login?q="+this.state.name).then((data)=>{
            data.json().then((response)=>{
                console.log(response)
                if(response.length>0){
                    localStorage.setItem('login',JSON.stringify(response))
                    console.log(this.props.history.push('list'))
                }else{
                    alert("Please Check username and password")
                }
            })
        })
    }
    render(){
        return(
            <div align="center">
                <h1>Login</h1>
                <input type="text" placeholder="enter name" name="user" onChange={(event) => this.setState({name:event.target.value})} /> <br/> <br/>
                <input type="password" placeholder="enter password" name="password" onChange={(event) => this.setState({password:event.target.value})} /> <br/> <br/>
                <button onClick={() =>{this.login()}}>Login</button>
            </div>
        )
    }
};

export default Login;