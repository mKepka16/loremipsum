import React, { useState } from "react";
import Login from "./Section-Login/Login";
import Register from "./Section-Login/Register";
import MainPage from './Section-Main/MainPage';
import {
    Route,
    Switch
} from "react-router-dom";
import { ProtectedRoute } from '../utilities/ProtectedRoute';
import UserContext from '../utilities/userContext';
import Calendary from "./Section-Calendar/Calendary";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/rejestracja" component={Register} />
          <ProtectedRoute exact path="/strona-glowna" component={MainPage} />
          <ProtectedRoute exact path="/kalendarz" component={Calendary} />
          <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </UserContext.Provider>
  )
}

export default App;
