import { TextField } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import conquerer from "../assets/conquerer.png";
import kalamcollage from '../assets/kalamlabcollage (1).jpg'
import Button from '@material-ui/core/Button';
import React from "react";


const Frame5=()=>{
    return(<Grid container justify={'center'}  >
        <Grid item xs={12} >
            <p style={{color:'#C160E5',textAlign:'center',fontWeight:'bolder',fontSize:20}}>PEOPLE</p>
        </Grid>
        <Grid item lg={12}>
            <p id={'coursesare'}>Corses are designed by renowned educators <br/> to help students bring practicality into the heart <br/> of learning.</p>
        </Grid>
        <Grid item container lg={12}  justify={'center'} >
            <Grid item xs={12} lg={8} >
                <Paper elevation={5} id={'anuradha'}  >

                    <Grid container>
                        <Grid item lg={8}>
                            <p >Anuradha Mathur <br/> <span>HOD-Kalam Labs</span></p>
                            <p>Mrs Anuradha Madhur is one of the most celebrated <br/> Physisicts in India. She has been core authors of Physics <br/>NCERT Textbooks of Class 11th and 12th. She has <br/>previously taught at Harvard University, USA and ex- HOD<br/> Physics NCERT.<br/> <br/>At Kalam Labs, she guides students across Globe to Study<br/> Science Experimentally.</p>
                        </Grid>
                        <Grid item lg={4}>
                            <img src={conquerer} height={30} alt=""/>
                        </Grid>
                    </Grid>

                </Paper>

            </Grid>
            <Grid item container justify={'center'} style={{padding:8}}>
                <Grid item >
                    <img src={kalamcollage} style={{width:'100%'}} alt=""/>
                </Grid>
                <Grid item md={8} style={{textAlign:'center',color:'#C160E5',fontSize:35}}>
                    <h5 style={{color:'#8A808E',fontSize:20}}>WHO WE ARE</h5>
                    <p >
                        What if the line between your learning and the practicality didn’t exist? With Kalam labs augmented reality, not only is that possible, it’s here. Our products transforms how you learn, play, work, teach and connect with the world around you. It’s the perfect way to visualise things that would be impossible or impractical to see otherwise.
                    </p>
                </Grid>
                <Grid item container md={5}>
                    <Grid item>
                        <p>Stay in touch <br/><small style={{color:'#8373A5'}}>Share your email with us to keep on top of our new corses and <br/> updates. Don’t worry we are in to education business we understand privacy.</small></p>
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item >
                        <TextField id="outlined-basic" fullWidth label="Your Email" variant="outlined" style={{marginRight:80,marginBottom:20,backgroundColor:'#F2F2F2'}} />

                    </Grid>
                    <Grid item>
                        <Button variant={'contained'} color={'primary'} style={{marginLeft:80,paddingRight:20,paddingLeft:20,borderRadius:20}}>Submit</Button>
                    </Grid>
                </Grid>




            </Grid>

            <Grid item container style={{backgroundColor:'#15111F',color:'white',padding:10}} justify={'center'}>
                <Grid item md={3}>
                    <p>KALAM LABS</p>
                </Grid>
                <Grid item md={3}>
                    <p>Contact us <br/><small>Email: kalam-labs@elixarsystems.com <br/>Phone: +91 9897676787</small></p>
                </Grid>
                <Grid item md={3}>
                    <p>We offer you multiple payment methods. Payment gateway partners use secure encryption technology to keep your transaction details confidential at all times. You may use Internet Banking, Wallet and QR Support to make your purchase.</p>
                </Grid>
            </Grid>



        </Grid>
    </Grid>)
}
export default Frame5