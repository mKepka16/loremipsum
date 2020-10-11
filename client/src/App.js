import React, { useEffect, useState, useRef } from 'react';
import {
    Route,
    BrowserRouter,
    Link,
    Switch
} from "react-router-dom";
import FileUpload from './components/FileUpload/FileUpload';
import Login from './components/Login/Login';

function App () {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login isLogged={isLogged} setIsLogged={setIsLogged}/>
                </Route>
                <Route exact path="/upload">
                    <FileUpload isLogged={isLogged} setIsLogged={setIsLogged}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;