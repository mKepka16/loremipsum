import React, { useState, useEffect } from 'react';
import MainLayout from './Partials/MainLayout';
import './css/Q_A.css';
import data from './Data/Q_A-data';
import { Grid, Typography, Box, Card, CardHeader, CardContent, Paper, TextField } from '@material-ui/core';


export default function Q_A(props) {
    const [boxes, setBoxes] = useState(data);
    const [search, setSearch] = useState('');

    useEffect(() => {
        console.log('fdfs');
        const filteredData = data.filter(element => element.question.toLowerCase().includes( search.toLowerCase() ));
        setBoxes(filteredData);
    }, [search]);

    return (
        <MainLayout history={props.history}>
            <Grid container>
                <Grid item xs={1} sm={false} md={3} lg={4}/>
                <Grid item xs={10} sm={12} md={6} lg={4}>
                    <Box width={1} display="flex" justifyContent="center">
                        <TextField 
                            type="search"
                            label="Szukaj"
                            variant="outlined"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        ></TextField>
                    </Box>

                    {boxes.map((box, index) => {
                        return (
                            <Box key={index} my={5}>
                                <Typography variant="h5" color="primary">
                                    {box.question}
                                </Typography>

                                <Typography variant="body1" className="answer">
                                    {box.answer}
                                </Typography>
                            </Box>
                        );
                    })}
                </Grid>
                <Grid item xs={1} sm={false} md={3} lg={4}/>
            </Grid>
        </MainLayout>
    )
}