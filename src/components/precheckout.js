import React, {useContext, useEffect, useState} from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import explorer from '../assets/explorer.png'
import Divider from '@material-ui/core/Divider';
import {useMediaQuery} from 'react-responsive'
import {
    BrowserRouter as Router, Route, Switch, useParams,
    useRouteMatch
} from 'react-router-dom'
import {FormSelectContext} from "../App";
import Aos from "aos";
import conquerer from '../assets/conquerer.png'
import {Form1, Form2, Form3} from "./paymentform";

const Detail = () => {
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'})
    return (<React.Fragment>
        <Grid container item lg={6} justify={'center'} alignItems={'center'}>
            <Grid item xs={2} lg={1} style={{marginRight: 10}}>
                <img src={conquerer} height={50} alt=""/>
            </Grid>
            <Grid item container direction={'column'} xs={8} lg={4}>
                <Grid item style={{color: 'white'}}>
                    <p>Engineering Conquerer <br/><span style={{color: '#8A808E', fontSize: '12px'}}>Course for class 11th to 12th</span>
                    </p>
                    {isPortrait ? <div></div> :
                        <p style={{fontSize: 12, fontFamily: "inherit"}}>An Augmented Reality based
                            Practical <br/> Imagination Foundation Course</p>}
                    <span style={{color: '#8A808E', fontSize: '12px'}}>2 Weeks Course</span>

                    <p>Rs. 799 <span style={{marginLeft: 80, textAlign: 'right'}}>Rs 5,999</span> <br/> <span
                        style={{fontSize: 12, fontFamily: "sans-serif"}}>Price Per Class Rs 120</span></p>
                </Grid>
            </Grid>
            <Grid item container direction={'column'} lg={12} justify={'center'} alignItems={'center'}>
                {isPortrait ? <div></div> : <hr style={{width: '60%'}}/>}
                <Grid item>

                </Grid>

                <Grid item style={{color: 'white'}}>
                    {!isPortrait && <p style={{fontSize: '15px'}}>How it works</p>}
                </Grid>
                {isPortrait ? <div></div> :
                    <Grid item container direciton={'column'} justify={'center'} alignItems={'center'} lg={12}
                          style={{color: 'white', fontSize: '13px'}} className={'howitworks'}>
                        <Grid item container lg={8}>
                            <Grid item lg={3}>
                                <p><span>1 </span></p>
                            </Grid>
                            <Grid item lg={8}>
                                <p>An Augmented Reality based Practical Imagination Foundation Course</p>
                            </Grid>
                        </Grid><Grid item container lg={8}>
                        <Grid item lg={3}>
                            <p><span>2 </span></p>
                        </Grid>
                        <Grid item lg={8}>
                            <p>An Augmented Reality based Practical Imagination Foundation Course</p>
                        </Grid>
                    </Grid><Grid item container lg={8}>
                        <Grid item lg={3}>
                            <p><span>3 </span></p>
                        </Grid>
                        <Grid item lg={8}>
                            <p>An Augmented Reality based Practical Imagination Foundation Course</p>
                        </Grid>
                    </Grid><Grid item container lg={8}>
                        <Grid item lg={3}>
                            <p><span>4 </span></p>
                        </Grid>
                        <Grid item lg={8}>
                            <p>An Augmented Reality based Practical Imagination Foundation Course</p>
                        </Grid>
                    </Grid>
                    </Grid>}
            </Grid>


        </Grid>
    </React.Fragment>)
}
const FormOutPut = () => {

    const {form, setFrom} = useContext(FormSelectContext)

    if (form === 0) {
        return (<Form1/>)
    }
    if (form === 1) {
        return (<Form2/>)
    }
    if (form === 2) {
        return (<Form3/>)
    }
}
const PreCheckout = () => {

    const isPortrait = useMediaQuery({query: '(orientation: portrait)'})
    return (<React.Fragment>
        <Grid container className={'precheckout'} >
            <Grid item xs={12}><p style={{
                textAlign: 'center',
                color: 'white',
                fontFamily: "sans-serif",
                fontWeight: 'bolder'
            }}>KALAM <br/>LABS</p></Grid>
            <Detail/>
            <Grid item lg={5} style={{paddingTop: 30}}>

                <FormOutPut/>

            </Grid>
            <Grid item style={{color: 'white'}}>
                {isPortrait && <p style={{fontSize: '15px', textAlign: 'center'}}>How it works</p>}
            </Grid>
        </Grid>

    </React.Fragment>)
}

export default PreCheckout