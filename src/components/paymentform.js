import React, {useContext, useEffect, useState} from "react";
import 'date-fns';
import "aos/dist/aos.css"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import OtpInput from 'react-otp-input';
import {FormSelectContext,  OtpContext, RegisterContext,SpinnerContext} from "../App";
import Aos from "aos";
import API from "../api-service";
import {
    useParams
} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import {FormHelperText, TextField} from '@material-ui/core';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";


const Form1 = () => {
    const {trial}  =useParams()
    const [text,setText] = useState('Buy now')
    const {form, setForm} = useContext(FormSelectContext)
    const {spin,setSpin} = useContext(SpinnerContext)
    const {register, setRegister} = useContext(RegisterContext)
    const {otpContent, setOtpContent} = useContext(OtpContext)
    useEffect(() => {
        Aos.init({duration: 1000})
        if(trial=='trial')
            setText('Book A Free Trial')
    }, [register,spin,trial])

    const handleSubmit = () => {
        setSpin(true)
            API.sendOtp(register.mobile).then(res => {
                console.log(res.data)
                setOtpContent(res.data['Details'])
                setForm(1)
                setSpin(false)
            }).catch(error => {
                setSpin(false)
                alert("Unable to send OTP")
            })

    }
    return (<React.Fragment>
        <div data-aos={'fade-zoom-in'}><Grid container>
            <Grid item container justify={'center'}>

                <Paper elevation={5} style={{ padding: 20, borderRadius: '4%'}}>
                    <Grid container item justify={'center'} >
                        <Grid item xs={10}>

                            <p>{text} <br/><span style={{color: 'gray', fontSize: 13}}>due to high demand only limited seats are available</span>
                            </p>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <ValidatorForm

                                onSubmit={handleSubmit}
                                onError={(errors) => console.log(errors)}
                            >
                                <Grid item container>
                                    <Grid item xs={10}>
                                        <FormHelperText className={'helper'} id={"my-helper-text"}>Name of The
                                            Student</FormHelperText>
                                        <TextValidator
                                            className={'input'}
                                            label="Full Name"
                                            size={'small'}
                                            onInput={e=>setRegister({
                                                ...register,
                                                name: e.target.value
                                            })}
                                            variant={'outlined'}
                                            name="name"
                                            value={register.name}
                                            validators={["required"]}
                                            errorMessages={["this field is required"]}
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormHelperText className={'helper'} id="my-helper-text">School in you are
                                            studying</FormHelperText>
                                        <TextValidator
                                            className={'input'}
                                            label="School"
                                            size={'small'}
                                            onInput={e=>setRegister({
                                                ...register,
                                                school: e.target.value
                                            })}
                                            variant={'outlined'}
                                            name="school"
                                            value={register.school}
                                            validators={["required"]}
                                            errorMessages={["this field is required"]}
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormHelperText className={'helper'} id="my-helper-text">Actual Email address*</FormHelperText>
                                        <TextValidator
                                            className={'input'}
                                            label="Email"
                                            size={'small'}
                                            onInput={e=>setRegister({
                                                ...register,
                                                email: e.target.value
                                            })}
                                            variant={'outlined'}
                                            name="email"
                                            value={register.email}
                                            validators={["required", "isEmail"]}
                                            errorMessages={["this field is required", "email is not valid"]}
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormHelperText className={'helper'} id="my-helper-text">Accessible phone number for
                                            verification</FormHelperText>
                                        <TextValidator
                                            className={'input'}
                                            label="Mobile"
                                            size={'small'}
                                            onInput={e=>setRegister({
                                                ...register,
                                                mobile: e.target.value
                                            })}
                                            variant={'outlined'}
                                            name="mobile"
                                            value={register.mobile}
                                            validators={["required"]}
                                            errorMessages={["this field is required"]}
                                        />
                                    </Grid>
                                    <Grid item xs={12} style={{paddingTop: 10, paddingBottom: 30}}>
                                        <Button type="submit" variant={'contained'} style={{backgroundColor: '#19C8FF', color: 'white',}} endIcon={spin&&<CircularProgress color="secondary" />}>Proceed</Button>
                                    </Grid>
                                </Grid>

                            </ValidatorForm>

                        </Grid>


                    </Grid>

                </Paper>
            </Grid>

        </Grid></div>
    </React.Fragment>)
}
const Form2 = () => {
    const {form, setForm} = useContext(FormSelectContext)
    const {otpContent, setOtpContent} = useContext(OtpContext)
    const {register, setRegister} = useContext(RegisterContext)
    const [otp, setOtp] = useState("")
    const {spin,setSpin} = useContext(SpinnerContext)
    const handlesubmit = (ootp) => {
        setSpin(true)
        API.verifyOtp({sessionId: otpContent, otp: otp}).then(res => {
            setSpin(false)
            setForm(2)
        }).catch(error => {
            setSpin(false)
            alert("wrong otp")

        })
    }
    useEffect(() => {

    }, [otp, otpContent,spin])
    const handleChange = (otp) => {
        setOtp(otp)
    };
    return (<React.Fragment>
        <div data-aos={'fade-zoom-in'}><Grid container>
            <Grid item>
                <Paper elevation={5} style={{paddingLeft: 50, paddingTop: 20, borderRadius: '4%', paddingRight: 50}}>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <p>Verify Your Identity <br/><span style={{color: 'gray', fontSize: 13}}>You are trying to book a Kalam
                                labs AR course. Enter 6 digit verification code we sent you on your phone no {register.mobile}
                                <a >Change Phone No</a></span>
                            </p>
                        </Grid>
                        <Grid item>
                            <OtpInput
                                value={otp}
                                onChange={handleChange}
                                numInputs={6}
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
                            <Button variant={'contained'} onClick={handlesubmit}
                                    style={{backgroundColor: '#19c8ff', color: 'white',}}
                                    endIcon={spin&&<CircularProgress color="secondary" />}
                            >Verify <br/>
                            </Button>
                            <p style={{color: 'gray'}}>Didn't get the verification code?
                                <button
                                style={{textDecoration: 'none', color: '#19C8FF', fontWeight: 'lighter'}}
                                onClick={()=>API.sendOtp(register.mobile).then(res => {
                                    setOtpContent(res.data['Details'])
                                    setForm(1)
                                }).catch(error => {
                                    alert("Unable to send OTP")
                                })}>
                                    Resend
                                </button>
                            </p>
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>

        </Grid></div>
    </React.Fragment>)
}
const Form3 = () => {
    const {form, setForm} = useContext(FormSelectContext)
    const {register, setRegister} = useContext(RegisterContext)
    const {spin,setSpin} = useContext(SpinnerContext)
    const {trial} = useParams()
    useEffect(()=>{
        // console.log("order id",register.order_id)
    },[register,spin])

    const handleSubmit = () => {
        setSpin(true)
        if(register.date&&register.slot)
        {
            if(trial=='buycourse')
            API.getOrderId({name:register.name,amount:'50000'}).then(
                res=> {
                    setRegister({...register,order_id:res.data['order_id']})
                    setSpin(false)
                    setForm(3)
                }).catch(error=>{
                setSpin(false)
                alert("Problem fetching order Id")
            })
            if(trial=='trial')
                API.bookTrial({register}).then(
                    res=> {
                        setSpin(false)
                        alert('Response Saved')
                        window.location.href='https://kalamlabs.netlify.app/'
                    }).catch(error=>{
                    setSpin(false)
                    alert("Response already exists")
                })


        }
        else {
            setSpin(false)
            alert("Please select date and slot")
        }

    }

    return (<React.Fragment>
        <div data-aos={'fade-zoom-in'}><Grid container>
            <Grid item>
                <Paper elevation={5} style={{paddingLeft: 50, paddingTop: 20, borderRadius: '4%', paddingRight: 50}}>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <p>Book a slot<br/><span
                                style={{color: 'gray', fontSize: 13}}>Timezone (GMT+05:30) IST</span></p>
                            <button onClick={() => setForm(0)}>back</button>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="date"
                                label="Select date"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={e => setRegister({
                                    ...register,
                                    date: e.target.value
                                })}
                            />
                        </Grid>
                        <Grid container item alignItems={'center'}>
                            <Grid item xs={12} style={{marginTop: 10}}>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: "09:00"
                                    })}
                                >09:00 AM
                                </button>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: "10:00"
                                    })}
                                >10:00 AM
                                </button>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: "11:00"
                                    })}
                                >11:00 AM
                                </button>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: 10}}>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: "12:00"
                                    })}
                                >12:00 AM
                                </button>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: '13:00'
                                    })}
                                >13:00 AM
                                </button>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: '14:00'
                                    })}
                                >14:00 AM
                                </button>
                            </Grid>
                            <Grid item>
                                <p style={{color: '#8A808E', fontSize: '13px'}}>Due to high demand only few slots are
                                    left. <br/> Please pick your slot as available.</p>
                            </Grid>


                        </Grid>
                        <Grid item style={{paddingTop: 10, paddingBottom: 30}}>
                            <Button variant={'contained'}
                                    style={{backgroundColor: '#19c8ff', color: 'white', fontSize: 12}}
                                    onClick={handleSubmit} endIcon={spin&&<CircularProgress color="secondary" />}
                            >Confirm Slot and Pay <br/></Button>

                        </Grid>
                    </Grid>

                </Paper>
            </Grid>

        </Grid></div>
    </React.Fragment>)
}
const Form4 = () => {
    const {register, setRegister} = useContext(RegisterContext)

    useEffect(()=>{

    },[register])

    var options = {
        "key": "rzp_test_L3hv3powYQMGQn",
        "amount": "50000",
        "currency": "INR",
        "name": "Elixir Systems",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": register.order_id,
        "handler": function (response){
            API.verifySignature({order_id:response.razorpay_order_id,payment_id:response.razorpay_payment_id,signature:response.razorpay_signature}).then(
                res=>{
                    API.register({...register,order_id:response.razorpay_order_id,
                        payment_id:response.razorpay_payment_id,
                        payment:true,
                        payment_amount:'799',
                        signature:response.razorpay_signature,}).then(res => {
                            API.sendMail({name:register.name,email:register.email,amount:'799',order_id:response.razorpay_order_id}).
                                then(res=>alert('A confirmation mail has been sent on '+register.email)).
                                catch(err=>{alert('Problem sending mail and processing payment')})
                        window.location.href=`https://kalamlabs.netlify.app/paymentstatus/${response.razorpay_order_id}`
                    }).catch(
                        error => {
                            alert("Mobile Number Already registered")
                        }
                    )
                }
            ).catch(err=>{
                alert("signature verification failed")
            })

        },
        // "callback_url": "http://127.0.0.1:8000/api/success/",
        "prefill": {
            "name": register.name,
            "email": register.email,
            "contact": register.mobile
        },
        "notes": {
            "address": "Elixir System Office"
        },
        "theme": {
            "color": "#F37254"
        }
    };
    var rzp1 = new window.Razorpay(options);

    return (
        <div data-aos={'fade-zoom-in'}>
            <Grid container justify={'center'}>
                <Grid item xs={12}>
                    <Paper elevation={5}
                           style={{ paddingTop: 20, borderRadius: '4%'}}>
                        <Grid container justify={'center'}>
                            <Grid item xs={10}>
                                <p style={{fontWeight:'bolder'}}>Pay now to book your slot<br/><span
                                    style={{color: 'gray', fontSize: 13}}>Timezone (GMT+05:30) IST</span></p>
                            </Grid>
                            <Grid item xs={10}>
                                <p style={{fontWeight: 'lighter', fontSize: '13px', color: '#8A808E'}}>Make a secure
                                    payment, we use bank level security <br/> to process your payment.
                                    Choose any of the <br/> method below.</p>
                            </Grid>
                            <Grid item xs={10}>
                                <p style={{fontWeight: 'lighter', fontSize: 12, color: '#8A808E'}}>Payment Details</p>
                            </Grid>
                            <Grid item xs={8}>
                                <p style={{fontWeight: 'bolder', fontSize: '13px'}}>Engineering Conquerer Course <br/>
                                    <span
                                        style={{fontWeight: 'lighter', color: '#8A808E'}}>For class 11th to 12th</span>
                                </p>
                            </Grid>

                            <Grid item xs={2}>
                                <p>Rs 5,999</p>
                            </Grid>
                            <Grid item xs={8}>
                                <p style={{fontWeight: 'bolder', fontSize: '13px', color: '#C160E5'}}>Special Discount
                                    Applies
                                </p>
                            </Grid>
                            <Grid item xs={2}>
                                <p>-Rs 5,000</p>
                            </Grid>
                            <Grid item container xs={10} style={{backgroundColor:'#F2F2F2',borderRadius:15,padding:'0 10px 0 10px',fontWeight:'bolder',margin:'0 0 10px 0'}} justify={'space-between'}>
                                <Grid item xs={7}>
                                    <p style={{}}>Total Payable after discount</p>
                                </Grid>
                                <Grid item xs={2}>
                                    <p>Rs 999</p>
                                </Grid>
                            </Grid>

                            <Grid item xs={10}>
                                <Button variant={'contained'}
                                        fullWidth
                                        style={{backgroundColor: '#19c8ff', color: 'white', fontSize: 12,margin:'0 0 20px 0'}} onClick={(e) => {
                                    rzp1.open();
                                    e.preventDefault();
                                }}>Pay
                                    Securely <br/></Button>

                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>

            </Grid></div>

    )
}
export {Form1, Form2, Form3, Form4}
