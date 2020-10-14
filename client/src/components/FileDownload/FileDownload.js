import Axios from 'axios';
import React, { Fragment, useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

export default function FileDownload(props) {
    const image = useRef(null);

    useEffect(() => {
        Axios.get('/api/image', {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
        .then(response => {
            console.log(response);
            image.current.src = `/img/${response.data.photo}`;
        })
        .catch(error => {

        });
    }, [])

    return (
        <div>
            <img ref={image} />
        </div>
    )
}

