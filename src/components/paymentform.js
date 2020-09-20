import React, {useContext, useEffect, useState} from "react";
import 'date-fns';
import "aos/dist/aos.css"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import OtpInput from 'react-otp-input';
import {FormSelectContext} from "../App";
import Aos from "aos";
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {FormControl, FormHelperText, Input, InputLabel, TextField} from '@material-ui/core';


const Form1 = () => {

    const {form, setForm} = useContext(FormSelectContext)
    useEffect(() => {
        Aos.init({duration:1000})
    },[])
    return (<React.Fragment>
        <div data-aos={'fade-zoom-in'}><Grid container>
            <Grid item>
                <Paper elevation={5} style={{paddingLeft: 50, paddingTop: 20, borderRadius: '4%', paddingRight: 50}}>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <p>Buy Now <br/><span style={{color: 'gray', fontSize: 13}}>due to high demand only limited seats are available</span>
                            </p>
                        </Grid>
                        <Grid item>
                            <FormHelperText className={'helper'} id={"my-helper-text"}>Name of The
                                Student</FormHelperText>
                            <TextField className={'input'} id="outlined-basic" label="Full Name" size={'small'}
                                       variant="outlined"/>
                        </Grid><Grid item>
                        <FormHelperText className={'helper'} id="my-helper-text">School in you are
                            studying</FormHelperText>
                        <TextField className={'input'} id="outlined-basic" label="School" variant="outlined"
                                   size={'small'}/>
                    </Grid><Grid item>
                        <FormHelperText className={'helper'} id="my-helper-text">Actual Email address*</FormHelperText>
                        <TextField className={'input'} id="outlined-basic" label="Email Address" variant="outlined"
                                   size={'small'}/>
                    </Grid><Grid item>
                        <FormHelperText className={'helper'} id="my-helper-text">Accessible phone number for
                            verification</FormHelperText>
                        <TextField className={'input'} id="outlined-basic" label="Phone Number" variant="outlined"
                                   size={'small'}/>
                    </Grid>
                        <Grid item style={{paddingTop: 10, paddingBottom: 30}}>
                            <Button variant={'contained'} style={{backgroundColor: '#19C8FF', color: 'white',}}
                                    onClick={() => setForm(1)}>Proceed</Button>
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>

        </Grid></div>
    </React.Fragment>)
}

const Form2 = () => {
    const {form, setForm} = useContext(FormSelectContext)
    const [otp, setOtp] = useState("")
    const handleChange = (otp) => setOtp(otp);
    return (<React.Fragment>
        <div data-aos={'fade-zoom-in'}><Grid container>
            <Grid item>
                <Paper elevation={5} style={{paddingLeft: 50, paddingTop: 20, borderRadius: '4%', paddingRight: 50}}>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <p>Verify Your Identity <br/><span style={{color: 'gray', fontSize: 13}}>You are trying to book a Kalam labs AR course. Enter 6 digit verification code we sent you on your phone no 99*****363 Change Phone No</span>
                            </p>
                        </Grid>
                        <Grid item>
                            <OtpInput
                                value={otp}
                                onChange={handleChange}
                                numInputs={4}
                                separator={<span>-</span>}
                                inputStyle={{
                                    backgroundColor: '#F2F2F2',
                                    borderStyle: 'none',
                                    height: 30,
                                    width: 30,
                                    borderRadius: 10
                                }}
                            />
                        </Grid>
                        <Grid item style={{paddingTop: 10, paddingBottom: 30}}>
                            <Button variant={'contained'} onClick={() => setForm(2)}
                                    style={{backgroundColor: '#19c8ff', color: 'white',}}>Verify <br/></Button>
                            <p style={{color: 'gray'}}>Didn't get the verification code?<a
                                style={{textDecoration: 'none', color: '#19C8FF', fontWeight: 'lighter'}}
                                href="">Resend</a></p>
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>

        </Grid></div>
    </React.Fragment>)
}
const Form3 = () => {
    const {form, setForm} = useContext(FormSelectContext)
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [checked, setChecked] = React.useState(true);
    const [slot,setSlot]= useState(null)

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (<React.Fragment>
        <div data-aos={'fade-zoom-in'}><Grid container>
            <Grid item>
                <Paper elevation={5} style={{paddingLeft: 50, paddingTop: 20, borderRadius: '4%', paddingRight: 50}}>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <p>Book a slot<br/><span
                                style={{color: 'gray', fontSize: 13}}>Timezone (GMT+05:30) IST</span></p>
                        </Grid>
                        <Grid item>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Select Date"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid container item alignItems={'center'}>
                            <Grid item xs={12} style={{marginTop: 10}}>
                                <button
                                        className={'button'}
                                        onClick={()=>setSlot('0900')}
                                        >09:00 AM</button>
                                <button
                                        className={'button'}
                                        onClick={()=>setSlot('1000')}
                                        >10:00 AM</button>
                                <button
                                        className={'button'}
                                        onClick={()=>setSlot('1100')}
                                       >11:00 AM</button>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: 10}}>
                                <button
                                    className={'button'}
                                    onClick={()=>setSlot('0900')}
                                >12:00 AM</button>
                                <button
                                    className={'button'}
                                    onClick={()=>setSlot('1000')}
                                >13:00 AM</button>
                                <button
                                    className={'button'}
                                    onClick={()=>setSlot('1100')}
                                >14:00 AM</button>
                            </Grid>
                            <Grid item>
                                <p style={{color: '#8A808E', fontSize: '13px'}}>Due to high demand only few slots are
                                    left. <br/> Please pick your slot as available.</p>
                            </Grid>


                        </Grid>
                        <Grid item style={{paddingTop: 10, paddingBottom: 30}}>
                            <Button variant={'contained'}
                                    style={{backgroundColor: '#19c8ff', color: 'white', fontSize: 12}}
                                    >Confirm Slot and Pay <br/></Button>

                        </Grid>
                    </Grid>

                </Paper>
            </Grid>

        </Grid></div>
    </React.Fragment>)
}
export {Form1, Form2, Form3}
