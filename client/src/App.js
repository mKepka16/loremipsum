import React, { useState } from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import FileUpload from './components/FileUpload/FileUpload';
import Login from './components/Login/Login';
import { UserContext } from './contexts/UserContext'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import FileDownload from './components/FileDownload/FileDownload';

function App (props) {
    const [user, setUser] = useState('No user');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Switch>
                <Route exact path="/" component={Login} />
                <ProtectedRoute exact path="/upload" component={FileUpload} />
                <ProtectedRoute exact path="/download" component={FileDownload} />
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        </UserContext.Provider>
    )
}

export default App;