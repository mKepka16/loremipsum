import React, { useContext } from 'react';
import MainLayout from './Partials/MainLayout';
import UserContext from '../../utilities/userContext';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import {
    Grid, 
    Typography, 
    Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
      width: '100%',
    },
    userText: {
        display: 'inline',
        marginLeft: '5px'
    }
});

function Preferences(props) {
    const {user, setUser} = useContext(UserContext);
    const { classes } = props;

    return (
        <MainLayout history={props.history}>
            <Grid container>
                <Grid item sm={1} md={3}/>
                <Grid item sm={10} md={6}>
                    <Typography variant='h5' align="center">
                        Preferencje
                    </Typography>
                    <Typography>
                        Imię: {user && user.firstName}
                        <Button>Zmień</Button>
                    </Typography>
                    <Typography>
                        Nazwisko: {user && user.lastName}
                    </Typography>
                    <Typography>
                        Wzrost: {user && `${user.height}cm`}
                    </Typography>
                    <Typography>
                        Waga: {user && `${user.weight}kg`}
                    </Typography>
                    <Typography>
                        Wiek: {user && user.age}
                    </Typography>
                    { user && user.photo ? <img src={`/img/${user.photo}`}/> : <AccountCircleSharpIcon />}

                    <div className={classes.root}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                Imię: 
                                <Typography color="primary" className={classes.userText}>{user && user.firstName}</Typography>
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Expansion Panel 2</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    </div>
                </Grid>
                <Grid item sm={1} md={3}/>
            </Grid>
        </MainLayout>
    )
}

Preferences.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Preferences);