import React, { useEffect, useState } from 'react';
import auth from '../../auth'
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = props => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        axios
            .post('api/auth', {}, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`
                }
            })
            .then(res => { 
                props.history.push('/upload');
            })
            .catch(err => {});
    }, [])

    return (
        <div>
            <input type="login" value={login} onChange={e => setLogin(e.target.value)}/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={() => {
                auth.login(login, password, 
                () => {
                    props.history.push("/upload");
                }, 
                err => {
                    console.log(err.message);
                });
            }}>Login</button>
        </div>
    )
}

export default Login;