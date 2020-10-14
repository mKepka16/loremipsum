import React, { useEffect, useState } from 'react';
import auth from '../../utilities/auth'
import axios from 'axios';
import Cookies from 'js-cookie';
import "./css/login.css";
import PersonIcon from "@material-ui/icons/Person";
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import {
  Divider,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

function validateEmail(email) {
  const regrEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = regrEx.test(String(email).toLowerCase());
  return !result;
}

function turnONButton(login, password, mail)
{
  
  if (login === "" || password === "" || password.length < 7 || validateEmail(mail) === true)
  {
    return true
  }
  else{ 
  return false
  }
}

const Login = props => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios
        .post('api/auth', {}, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
        .then(res => { 
            props.history.push('/strona-glowna');
        })
        .catch(err => {});
  }, [])

  return (
    <div>
      <Grid container className="login" alignItems="center">
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
                      Zaloguj się
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
                      error={errorEmail}
                      value={login}
                      helperText={"Podaj swój adres email"}
                      onChange={(e) => {
                        setErrorEmail(validateEmail(e.currentTarget.value));
                        setLogin(e.currentTarget.value);
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
                      value={password}
                      onChange={(e) => {
                        setPassword(e.currentTarget.value);
                      }}
                    />
                  </Typography>
                </CardContent>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid item xs={6}>
                <Typography align="right">
                  <Link to="/rejestracja">
                    <Button 
                      variant="contained" 
                      color="primary" 
                    >
                      <PregnantWomanIcon/>
                      Zarejestruj
                    </Button>
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="left">
                  <Button 
                    variant="contained"
                    color="primary" 
                    disabled={turnONButton(login, password, login)}
                    onClick={() => {
                      auth.login(login, password, 
                      () => {
                          props.history.push("/strona-glowna");
                      }, 
                      err => {
                          console.log(err.message);
                      });
                  }}>
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

export default Login;
