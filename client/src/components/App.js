import React from "react";
import Login from "./Login";
import Register from "./Register";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        eMail: "test@test.pl",
        password: "",
        pregnanyStart: "",
        photo: "",
        firstName: "",
        lastName: "",
        age: "",
        height: "",
        weight: "",
      },
    };
  }
  render() {
    return <Register />;
  }
}

export default App;
