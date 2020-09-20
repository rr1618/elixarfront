import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import explorer from '../assets/explorer.png'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderStyle:'none'
    },
    media: {
        height: 140,
        width: 140,
        borderRadius:'50%',
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container justify={'center'} className={'card'}>
                <Grid item lg={12}>
                    <img src={explorer} style={{height:140,width:140,borderRadius:'50%'}} alt=""/>
                    <p>Shashakt Tripathi <br/><span>Co-Founder</span></p>
                    <p>JEE-AIR 560, KVPY Scholar, NTSE  <br/>Scholar, Only Person in History to Score <br/>full marks in Resonance Entrance Test</p>
                </Grid>
                <Grid item lg={6}>
                    <p>Know More</p>
                </Grid>
                <Grid item lg={6}>
                    <p style={{textAlign:'right'}}>rah</p>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
