import React, { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import auth from '../utilities/auth';
import "./register.css";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import MomentUtils from "@date-io/moment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";


function validateEmail(email) {
  const regrEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = regrEx.test(String(email).toLowerCase());
  return !result;
}

const Register = props => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('data123');
  const [message, setMessage] = useState(''); //error message

  const register = () => {
    axios
      .post('api/register', 
        {
          login,
          password,
          date,
          firstName,
          lastName,
          age,
          height,
          weight
        }, 
        {
          headers: {
              'Authorization': `Bearer ${Cookies.get('token')}`
          }
      })
      .then(res => { 
        auth.logout(() => {
          props.history.push("/");
        }) 
      })
      .catch(err => {
        console.log(err);
        // setMessage(err.response.data.error.message);
      });
  }

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
                      <PregnantWomanIcon fontSize="inherit" />
                      Zarejestruj się
                    </Typography>
                  }
                ></CardHeader>

                <Divider light />
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <Typography align="center">
                        <TextField
                          required
                          id="standard-required"
                          label="Imię"
                          helperText="Imię"
                          variant="outlined"
                          value={firstName}
                          onChange={e => setFirstName(e.target.value)}
                        />
                      </Typography>

                      <Typography align="center">
                        <TextField
                          required
                          id="standard-required"
                          label="Adres email"
                          helperText="Emial"
                          variant="outlined"
                          error={errorEmail}
                          value={login}
                          onChange={e => {
                            setErrorEmail(validateEmail(e.currentTarget.value));
                            setLogin(e.currentTarget.value);
                          }}
                        />
                      </Typography>
                      
                      <Typography>
                        
                      </Typography>
                      <MuiPickersUtilsProvider utils={MomentUtils}>
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-dialog"
                          label="Rozpoczęcie ciąży"
                          format="MM/dd/yyyy"
                          // value={date}
                          // onChange={e => setDate(e.target.value)}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography align="center">
                        <TextField
                          required
                          id="standard-required"
                          label="Nazwisko"
                          helperText="Nazwisko"
                          variant="outlined"
                          value={lastName}
                          onChange={e => setLastName(e.target.value)}
                        />
                      </Typography>

                      <Typography align="center">
                        <TextField
                          id="outlined-error"
                          label="Hasło"
                          type="password"
                          variant="outlined"
                          helperText="Podaj swoje hasło"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                        />
                      </Typography>

                      <div className="inputs">
                        <Typography>
                          <FormControl className="marg">
                            <InputLabel id="demo-simple-select-label">
                              Wiek
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              onChange={e => setAge(e.target.value)}
                            >
                              <MenuItem value={15}>Ten</MenuItem>
                              <MenuItem value={16}>Twenty</MenuItem>
                              <MenuItem value={17}>Thirty</MenuItem>
                              <MenuItem value={18}>Ten</MenuItem>
                              <MenuItem value={19}>Twenty</MenuItem>
                              <MenuItem value={20}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>

                          <FormControl className="marg">
                            <InputLabel id="demo-simple-select-label">
                              Wzrost
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={height}
                              onChange={e => setHeight(e.target.value)}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>

                          <FormControl className="marg">
                            <InputLabel id="demo-simple-select-label">
                              Waga
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={weight}
                              onChange={e => setWeight(e.target.value)}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid item xs={12}>
                <Typography align="center">
                  <Button variant="contained" color="primary" onClick={register}>
                    Zarejestruj
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

export default Register;
