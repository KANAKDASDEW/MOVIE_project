import React, { Component } from "react";
import Input from "./input.component";
import Form from "./from.componet";
import { login } from "./services/user-service";



class Login extends Form {

    state  = {
        data:{ username: '',password: ''},
        errors: { username:'', password: ''}
    }

    doSubmit = async (e) =>{
       
        const user ={ username: this.state.data.username, password:this.state.data.password };

        try{
            const res =await login(user);
            console.log(res);
            localStorage.setItem('accessToken',res.data.token);
            window.location = '/movies';
        }catch(error){
            console.log(error);
            const errors ={...this.state.errors};

            errors.username = 'UserName may be incorrect';
            errors.password = 'Password may be incorrect';

            this.setState({...this.state, errors});

        }     
    }
   

    render() {
        return(
        <div  className="container w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
            <div class="mb-3">
                <Input 
                    
                    label="User Name"
                    name= "username"
                    id="username"
                    type="text"
                    value={this.state.data.username}
                    onChange={e => this.handleChange(e)}
                    errors ={ this.state.errors}
                    />           
            </div>
            <div class="mb-3">
            <Input        
                    label="Password"
                    name= "password"
                    id="password"
                    type="password"
                    value={this.state.data.password}
                    onChange={e => this.handleChange(e)}
                    errors ={ this.state.errors}

                    />
            </div>
            <div class="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                    Check me out
                </label>
            </div>
            <button type="submit" class="btn btn-primary">
                Login
            </button>
        </form>
        </div>
        );
    }
}

export default Login;
