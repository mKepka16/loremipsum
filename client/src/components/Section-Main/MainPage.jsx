import React, { Fragment, useContext, useEffect, useState } from 'react';
import MainLayout from './Partials/MainLayout';
import UserContext from '../../utilities/userContext';
import moment from 'moment';
import data from './Data/main-page-data'
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './css/main-page.css';

export default function MainPage(props) {
    const {user, setUser} = useContext(UserContext);
    const [week, setWeek] = useState(null);

    useEffect(() => {
        if(user) {
            const pregnancyStart = moment(user.pregnancyStart.slice(0, 10), "YYYY MM DD");
            const todayDate = moment();

            const ms = todayDate.diff(pregnancyStart);
            const weekNum = Math.ceil(ms/1000/3600/24/7);

            setWeek(weekNum);
        }
    }, [user]);

    return (
        <MainLayout history={props.history}>
            {week && 
            <Fragment>
                <Typography variant="h4" color="textSecondary" align="center">
                    Tydzień {week}
                </Typography>

                <Box my={5}></Box>

                <Grid container>
                    <Grid item xs={1} lg={2}>
                        <Box width={1} display="flex" justifyContent='center' alignItems='center' height={1}>
                            <Box className='arrowLeftBox'>
                                <ArrowBackIosIcon color="primary" fontSize='large' onClick={e => setWeek(prev => prev <= 1 ? 1 : prev-1)}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={10} lg={8}>
                        <Box width={1} display="flex" justifyContent='center'>
                        <img src={`./photos/${data[3].photo}`} alt="" className="svg"/>
                        </Box>
                    </Grid>
                    <Grid item xs={1} lg={2}>
                        <Box width={1} display="flex" justifyContent='center' alignItems='center' height={1}>
                            <Box className='arrowRightBox' onClick={e => setWeek(prev => prev >= 36 ? 36 : prev+1)}>
                                <ArrowForwardIosIcon color="primary" fontSize='large'/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container className="article">
                    <Grid item xs={1} sm={0} md={3} lg={4}/>
                    <Grid item xs={10} sm={12} md={6} lg={4}>
                        <Typography variant="h5" align="center">
                            Informacje
                        </Typography>

                        <Divider variant="middle" className="divider"/>

                        <Typography align="center" className="p">
                            { data[3].childInfo }
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={0} md={3} lg={4}/>
                </Grid>

                <Grid container className="article">
                    <Grid item xs={1} sm={0} md={3} lg={4}/>
                    <Grid item xs={10} sm={12} md={6} lg={4}>
                        <Typography variant="h5" align="center">
                            Symptomy
                        </Typography>

                        <Divider variant="middle" className="divider"/>

                        <Typography align="center" className="p">
                            { data[3].symptoms }
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={0} md={3} lg={4}/>
                </Grid>
            </Fragment>}
            
        </MainLayout>
    )
}