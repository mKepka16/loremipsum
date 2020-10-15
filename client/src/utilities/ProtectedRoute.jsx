import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const [aut, setAut] = useState(null);

    useEffect(() => {
        axios
            .post('api/auth', {}, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`
                }
            })
            .then(res => { setAut(true); })
            .catch(err => { setAut(false); });
    }, [])


    return (
        <Route {...rest} render={
            props => {
                if(aut)
                    return <Component {...props} />
                else if(aut === false)
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
            }
        } />
    )
}

