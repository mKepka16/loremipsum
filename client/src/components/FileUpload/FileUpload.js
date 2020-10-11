import React, { Fragment, useState } from 'react'
import axios from 'axios';

const FileUpload = () => {
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
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            setMessage(response.data.message);
            console.log(response)
        })
        .catch(err => { 
            //setMessage(err);
            console.log(err);
        });
    }

    return (
        <Fragment>
            {message}
            <form onSubmit={onSubmit}>
                <input type='file' id='customFile' onChange={onChange}/>
                <input type='submit' value='Upload'/>
            </form>
        </Fragment>
    )
}

export default FileUpload;
