import React from "react";
import explorer from '../assets/explorer.png'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import conquerer from "../assets/conquerer.png";
import conquererShort from '../assets/conquerershort.png'
import explorerShort from '../assets/explorershort.png'
import {Link} from 'react-router-dom'

const Explorer = () => {
    return (
        <Paper elevation={5} className={'paper'} style={{backgroundColor: '#272330', marginRight: 10}}>
            <Grid container justify={'center'}>
                <Grid item lg={12}>
                    <img src={explorer} alt=""/>
                </Grid>
                <Grid item xs={12}>

                    <ul>
                        <li>For class 8th to 10th</li>
                        <li>Science Explorer</li>
                        <li>An Augmented Reality based Practical <br/>
                            Imagination Foundation Course
                        </li>
                        <li>2 Weeks Course</li>
                        <li>2 View Detailed Curriculum</li>
                        <li>2 Book A Free AR Trial Now</li>
                    </ul>
                </Grid>
                <Grid item container justify={'space-between'}>
                    <Grid item>
                        <h3 style={{color: 'white'}}>Rs. 799 <br/> <span
                            style={{color: 'white', fontSize: '.5em', marginLeft: 20}}>
                                                    Price per Class Rs. 120
                                                </span></h3>

                    </Grid>
                    <Grid item>
                        <h4 style={{color: 'white', paddingRight: 10}}>
                            <del>Rs. 5,999</del>
                        </h4>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Link to={'/checkout'} style={{textDecoration: 'none'}}>
                        <Button variant={'contained'} style={{backgroundColor: '#19C8FF', width: '100%'}}>
                            <Grid container justify={'space-between'} style={{color: 'white', padding: 10}}>
                                <Grid item style={{fontSize: '.9em'}}>
                                    BUY NOW
                                </Grid>
                                <Grid item style={{fontSize: '.7em'}}>
                                    SAVE 70%
                                </Grid>
                            </Grid>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Paper>
    )
}
const Conquerer = () => {
    return (<Paper elevation={5} className={'paper'} style={{backgroundColor: '#272330', marginLeft: 10}}>
        <Grid container justify={'center'}>
            <Grid item lg={12}>
                <img src={conquerer} alt=""/>
            </Grid>
            <Grid item xs={12}>
                <ul>
                    <li>For class 11th to 12th</li>
                    <li>Engineering Conquerer</li>
                    <li>An Augmented Reality based Practical <br/>
                        Imagination Foundation Course
                    </li>
                    <li>2 Weeks Course</li>
                    <li>2 View Detailed Curriculum</li>
                </ul>
            </Grid>
            <Grid item>
                <Button variant={'contained'}

                        style={{
                            backgroundColor: '#19C8FF',
                            borderRadius: 20,
                            color: 'white',
                            marginBottom: 20,
                            marginTop: 30
                        }}> Coming Soon..</Button>
            </Grid>

        </Grid>
    </Paper>)
}

const ExplorerShort = () => {
    return (
        <Paper elevation={5} style={{borderRadius: '30px', width: '250px'}}>
            <Grid container style={{
                backgroundColor: '#19C8FF',
                color: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '65px'
            }}>
                <Grid item lg={2}>

                    <img src={explorerShort} style={{height: 70, width: 60}} alt=""/>


                </Grid>
                <Grid item lg={10}>
                    <Link to={'/checkout'} style={{textDecoration: 'none', color: 'white'}}><p>Science Explorer <br/>
                        <span
                            style={{color: '#A3E9FF', fontSize: '.7em'}}>Course for class 8th to 10th</span></p></Link>
                </Grid>
            </Grid>

        </Paper>
    )
}
const ConquererShort = () => {
    return (
        <Paper elevation={5} style={{borderRadius: '30px', width: '250px'}}>
            <Grid container style={{
                backgroundColor: '#19C8FF',
                color: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '60px'
            }}>
                <Grid item lg={2}>
                    <img src={conquererShort} style={{height: 70, width: 60}} alt=""/>
                </Grid>
                <Grid item lg={10}>
                    <Link to={'/checkout'} style={{textDecoration: 'none', color: 'white'}}><p>Engineering
                        Conquerer <br/> <span
                            style={{color: '#A3E9FF', fontSize: '.7em'}}>Course for class 11th to 12th</span></p></Link>
                </Grid>
            </Grid>

        </Paper>
    )
}

export {
    Explorer, Conquerer, ExplorerShort, ConquererShort
}