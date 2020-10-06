import React, { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState('loading...');

    useEffect(() => {
        fetch('api/chatData')
        .then(res => res.json())
        .then(res => res.response)
        .then(data => {
            setData(data[0].message);
        });
    }, []);

    return <p>Info: {data}</p>;
}

export default App;