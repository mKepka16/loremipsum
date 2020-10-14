import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import auth from "../../utilities/auth";
import "./css/register.css";
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
import InputLabel from "@material-ui/core/InputLabel";
import DateFnsUtils from "@date-io/date-fns";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from 'react-router-dom';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MenuItem from "@material-ui/core/MenuItem";

function validateEmail(email) {
  const regrEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = regrEx.test(String(email).toLowerCase());
  if (email === "") return result;
  else return !result;
}

function validateData(data) {
  if (data === "") return true;
  else return false;
}

function validatePassword(password) {
  if (password === "" || password.length < 7) return true;
  else return false;
}

function turnONButton(
  login,
  password,
  errorEmail,
  firstName,
  lastName,
  age,
  height,
  weight
) {
  if (
    login === "" ||
    validatePassword(password) === true ||
    errorEmail === true ||
    firstName === "" ||
    lastName === "" ||
    age === "" ||
    height === "" ||
    weight === ""
  ) {
    return true;
  } else return false;
}

const Register = (props) => {
  const [errorEmail, setErrorEmail] = useState(true);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setDate(date);
  };
  const [message, setMessage] = useState(""); //error message

  const wiek = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70];
  const wzrost = [140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,  ];
  const waga = [40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,  ];
  const register = () => {
    axios
      .post(
        "api/register",
        {
          login,
          password,
          date,
          firstName,
          lastName,
          age,
          height,
          weight,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        auth.logout(() => {
          props.history.push("/");
        });
      })
      .catch((err) => {
        console.log(err);
        // setMessage(err.response.data.error.message);
      });
  };

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
                          error={validateData(firstName)}
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
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
                          onChange={(e) => {
                            setErrorEmail(validateEmail(e.currentTarget.value));
                            setLogin(e.currentTarget.value);
                          }}
                        />
                      </Typography>
                      <Typography align="center">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-dialog"
                          label="Data ostatniej miesiączki"
                          format="MM/dd/yyyy"
                          value={date}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                      </MuiPickersUtilsProvider>
                      </Typography>
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
                          error={validateData(lastName)}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Typography>

                      <Typography align="center">
                        <TextField
                          id="outlined-error"
                          label="Hasło"
                          type="password"
                          variant="outlined"
                          helperText="*Conajmniej 7 znaków"
                          error={validatePassword(password)}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Typography>

                      <div className="inputs">
                        <Typography align="center">
                          <FormControl className="marg">
                            <InputLabel id="demo-simple-select-label">
                              Wiek
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              error={validateData(age)}
                              onChange={(e) => setAge(e.target.value)}
                            >
                              {wiek.map((value) => {
                                return (
                                  <MenuItem value={value}>{value}</MenuItem>
                                );
                              })}
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
                              error={validateData(height)}
                              onChange={(e) => setHeight(e.target.value)}
                            >
                              {wzrost.map((value) => {
                                return (
                                  <MenuItem value={value}>{value}</MenuItem>
                                );
                              })}
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
                              error={validateData(weight)}
                              onChange={(e) => setWeight(e.target.value)}
                            >
                              {waga.map((value) => {
                                return (
                                  <MenuItem value={value}>{value}</MenuItem>
                                );
                              })}
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
              <Grid item xs={6}>
                <Typography align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={register}
                    disabled={turnONButton(
                      login,
                      password,
                      errorEmail,
                      firstName,
                      lastName,
                      age,
                      height,
                      weight
                    )}
                  >
                    Zarejestruj
                  </Button>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="left">
                  <Link to="/">
                    <Button 
                      variant="contained" 
                      color="primary" 
                    >
                      Zaloguj się
                    </Button>
                  </Link>
                </Typography>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default Register;
