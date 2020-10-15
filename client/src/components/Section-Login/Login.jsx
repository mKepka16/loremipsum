import React, { useEffect, useState } from 'react';
import auth from '../../utilities/auth'
import axios from 'axios';
import Cookies from 'js-cookie';
import PersonIcon from "@material-ui/icons/Person";
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import {
  Divider,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Box
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Header from '../Form/Header';
import Controls from '../Form/Controls';
import "./css/login.css";

function validateEmail(email) {
  const regrEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = regrEx.test(String(email).toLowerCase());
  return !result;
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
      <Grid container style={{
        backgroundColor: '#51a7f781',
        height: '100vh'
      }} alignItems="center">
        <Grid item xs={1} md={2} lg={3} />
        <Grid item xs={10} md={8} lg={6}>
          <Card>
            <Box py={2}>
                <Grid item xs={12}>
                    <Header>
                      <PersonIcon fontSize="inherit" />
                      Zaloguj się
                    </Header>

                  <Divider light />
                  <CardContent>
                    
                    <Controls.TextInput 
                      label="Email"
                      value={login}
                      error={errorEmail}
                      helperText={"Podaj swój adres email"}
                      onChange={(e) => {
                        setErrorEmail(validateEmail(e.currentTarget.value));
                        setLogin(e.currentTarget.value);
                      }}
                      required={false}
                      my={2}/>

                    <Controls.TextInput 
                      label="Hasło"
                      type="password"
                      value={password}
                      helperText={"Podaj swoje hasło"}
                      onChange={(e) => {
                        setPassword(e.currentTarget.value);
                      }}
                      required={false}
                      my={2}/>

                  </CardContent>
                </Grid>
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
                      //disabled={errorEmail}
                      onClick={() => {
                        auth.login(login, password, 
                        () => {
                            props.history.push("/kalendarz");
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
            </Box>
          </Card>
        </Grid>
        <Grid item xs={1} md={2} lg={3} />
      </Grid>

  );
}

export default Login;
