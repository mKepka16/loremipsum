import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";


class Login extends React.Component {


  render() {
    return (
      <div>
        <Grid container alignItems="center">
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Grid item xs={12}>
                  <CardHeader
                    title={
                      <Typography
                        align="center"
                        variant="h5"
                        color="textSecondary"
                      >
                        <PersonIcon fontSize="inherit" />
                        Zarejestruj SIę
                      </Typography>
                    }
                  ></CardHeader>

                  <Divider light />
                  <CardContent>
                    <Typography align="center">
                      <TextField
                        id="outlined-error"
                        label="Adress email"
                        type="email"
                        variant="outlined"
                        error={this.state.errorEmail}
                        value={this.props.eMail}
                        helperText={"Podaj swój adres email"}
                        onChange={(e) => {
                          this.setState({
                            errorEmail: validateEmail(e.currentTarget.value),
                          });
                        }}
                      />
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography align="center">
                      <TextField
                        id="outlined-error"
                        label="Hasło"
                        type="password"
                        variant="outlined"
                        helperText={"Podaj swoje hasło"}
                      />
                    </Typography>
                  </CardContent>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid item xs={6}>
                  <Typography align="right">
                    <Button variant="contained" color="primary">
                      Zarejestruj
                    </Button>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="left">
                    <Button variant="contained" color="primary" disabled={this.state.errorEmail}>
                      Zaloguj się
                    </Button>
                  </Typography>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;