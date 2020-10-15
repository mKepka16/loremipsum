import React, { useContext } from 'react';
import auth from '../utilities/auth';
import UserContext from '../utilities/userContext';

const MainPage = props => {
    const {user, setUser} = useContext(UserContext);

    return <div>
        Strona główna
        <button onClick={() => {
            auth.logout(() => {
                props.history.push("/");
            }) 
        }}
        >Logout</button>

        <button onClick={() => {
            setUser(prev => prev+'a');
        }}>Manipulate context</button>
        {user}
    </div>

}

export default MainPage;