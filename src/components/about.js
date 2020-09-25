import React from "react";
import Grid from "@material-ui/core/Grid";
import './about.css'
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import airbus from '../assets/airbus.png'
import ceri from '../assets/ceri.png'
import dst from '../assets/DST-logo.jpg'
import mhrd from '../assets/mhrd.png'
import iitb from '../assets/iitb.png'
import lm from '../assets/lm.png'
import nvdia from '../assets/nvdia.jpg'
import iisc from '../assets/iisc.jpg'
import ncert from '../assets/ncert.jpg'
import tata from '../assets/tata.png'
import payu from '../assets/s1.svg'
import paytm from '../assets/s2.svg'
import rupay from '../assets/s3.svg'

const About = () => {
    return (
        <Grid container className={'about'}>
            <Grid item container justify={'center'} style={{padding: 8}}>
                <Grid item md={8} className={'whoweare'} >
                    <h5 style={{color: '#8A808E', fontSize: 20}}>WHO WE ARE</h5>
                    <p>
                        What if the line between your learning and the practicality didn’t exist? With Kalam labs
                        augmented reality, not only is that possible, it’s here. Our products transforms how you learn,
                        play, work, teach and connect with the world around you. It’s the perfect way to visualise
                        things that would be impossible or impractical to see otherwise.
                    </p>
                </Grid>
                <Grid item md={8}>
                    <Paper elevation={3} style={{padding: 20}}>
                        <Grid container>
                            <Grid item container md={12}>
                                <Grid item xs={4} md={2}><img src={airbus} alt=""/></Grid>
                                <Grid item xs={4} md={2}><img src={iisc} alt=""/></Grid>
                                <Grid item xs={4} md={2}><img src={ceri} alt=""/></Grid>
                                <Grid item xs={4} md={2}><img src={iitb} alt=""/></Grid>
                                <Grid item xs={4} md={2}><img src={mhrd} alt=""/></Grid>
                                <Grid item xs={4} md={2}><img src={ncert} alt=""/></Grid>
                                <Grid item xs={4} md={3}><img src={tata} alt=""/></Grid>
                                <Grid item xs={4} md={3}><img src={lm} alt=""/></Grid>
                                <Grid item xs={6} md={3}><img src={dst} alt=""/></Grid>
                                <Grid item xs={4} md={3}><img src={nvdia} alt=""/></Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container md={5} style={{marginTop:50,marginBottom:50}}>
                    <Grid item>
                        <strong>Stay in touch <br/> </strong><small style={{color: '#8373A5'}}>Share your email with us to keep on top
                            of our new corses and <br/> updates. Don’t worry we are in to education business we
                            understand privacy.</small>
                    </Grid>

                    <Grid item>
                        <input style={{
                            borderStyle: 'none',
                            backgroundColor: '#F2F2F2',
                            borderRadius: 20,
                            height: 40,
                            width: 240,
                            paddingLeft: 30,
                            marginTop:10,
                            outline:'none'
                        }} placeholder={'Your Email address'}/>

                    </Grid>
                    <Grid item>
                        <Button variant={'contained'} color={'primary'} style={{
                            marginTop:10,
                            marginLeft: 80,
                            paddingRight: 20,
                            paddingLeft: 20,
                            borderRadius: 20
                        }}>Submit</Button>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item container className={'footer'} style={{backgroundColor: '#15111F', padding: 10}} justify={'center'}>
                <Grid item xs={12} md={3}>
                    <p style={{fontWeight:'bolder'}}>KALAM <br/> LABS</p>
                </Grid>
                <Grid item xs={12} md={3}>
                    <p >Contact us <br/><small style={{color:'#8373A5'}}>Email: kalam-labs@elixarsystems.com <br/>Phone: +91 9897676787</small></p>
                </Grid>
                <Grid item xs={12} container md={3}>

                    <Grid item className={'paymethods'}>
                        <p style={{color:'#8373A5'}}>We offer you multiple payment methods. Payment gateway partners use secure encryption technology
                            to keep your transaction details confidential at all times. You may use Internet Banking, Wallet
                            and QR Support to make your purchase.</p>
                        <img src={rupay} style={{marginRight:15}} alt=""/>
                        <img src={paytm}  style={{marginRight:15}} alt=""/>
                        <img src={payu}  alt=""/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>

    )
}
export default About