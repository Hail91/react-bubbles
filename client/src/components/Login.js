import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {

  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');

  const userNameHandler = event => {
    setUserName(event.target.value);
};

  const passHandler = event => {
   setPass(event.target.value)
};

  const login = event => {
    event.preventDefault();

    const credentials = {
      username: userName,
      password: pass
    };

    axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubble-page');
    })
    .catch(error => console.log(error));
  };
  
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={login}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input value={userName} onChange={userNameHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input value={pass} onChange={passHandler} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;
