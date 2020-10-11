import React, { useState } from 'react';
import axios from 'axios';
import {
    Redirect
} from 'react-router-dom';

const Login = props => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [logged, setLogged] = useState(false);

    function loginUser() {
        axios.post('api/login', {
            login: login,
            password: password
        })
        .then(response => {
            console.log(response);
            props.setIsLogged(true);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <input type="login" value={login} onChange={e => setLogin(e.target.value)}/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={loginUser}>Login</button>
            { props.isLogged && <Redirect to='/upload'/> }
        </div>
    )
}

export default Login;