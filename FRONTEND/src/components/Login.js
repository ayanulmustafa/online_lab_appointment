import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {  message } from 'antd';
import axios from 'axios';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password
    }
    
    //console.log(data);
    axios.post('/api/v1/user/login', data)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("Userid", (response.data.user._id));
          //console.log(response.data.user.email)
          message.success("Login Successfully");
          navigate("/");
        } else {
          message.error(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      message.error("something went wrong");
      });
  }

  return (
    <>
    <div className="container col-md-5 mt-4">
    
    <form onSubmit={handleSubmit}>
    <h3>Login Patient</h3>
      <div className="mb-3">
      
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={event => setEmail(event.target.value)} required/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={event => setPassword(event.target.value)} required/>
        
      </div>
      
      
      <button type="submit" className="btn btn-success col-md-12">Login</button>
      <div className="container mt-3 text-center">
        <p>Don't have an account? <Link className="text-decoration-none" style={{color:"GREEN"}} to="/signup">Register</Link></p>
      </div>
      
    </form>
    </div>

        </>
    )
}

export default Login