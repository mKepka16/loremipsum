import React, { Fragment, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import auth from '../../auth';
import { Link } from 'react-router-dom';

const FileUpload = props => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('Choose File');
    const [message, setMessage] = useState('');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        axios.post('/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(err => {
                setMessage(err.response.data.error.message);
            });
    }

    return (
        <Fragment>
            {message}
            <form onSubmit={onSubmit}>
                <input type='file' id='customFile' onChange={onChange} />
                <input type='submit' value='Upload' />
            </form>
            <button onClick={() => {
               auth.logout(() => {
                   props.history.push("/");
               }) 
            }}>Logout</button>
            <Link to="/download">Pobierz plik</Link>
        </Fragment>
    )
}

export default FileUpload;
