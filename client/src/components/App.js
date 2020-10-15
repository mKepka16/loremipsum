import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import MainPage from './MainPage';
import {
    Route,
    Switch
} from "react-router-dom";
import { ProtectedRoute } from '../utilities/ProtectedRoute';
import UserContext from '../utilities/userContext';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/rejestracja" component={Register} />
          <ProtectedRoute exact path="/strona-glowna" component={MainPage} />
          <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </UserContext.Provider>
  )
}

export default App;
