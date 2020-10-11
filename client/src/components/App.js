import React from "react";
import Login from "./Login";

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
    return <Login user={this.state.user}/>;
  }
}

export default App;
