import React, { Fragment, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import MainPage from './MainPage';
import {
    Route,
    Switch
} from "react-router-dom";
import { ProtectedRoute } from './ProtectedRoute'

const App = () => {
  const [user, setUser] = useState({
    eMail: "test@test.pl",
    password: "",
    pregnanyStart: "",
    photo: "",
    firstName: "",
    lastName: "",
    age: "",
    height: "",
    weight: "",
  });

  return (
    <Fragment>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/rejestracja" component={Register} />
          <Route exact path="/strona-glowna" component={MainPage} />
          <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Fragment>
  )
}

export default App;
