import React, {useContext, useEffect, useState} from "react";
import 'date-fns';
import "aos/dist/aos.css"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import OtpInput from 'react-otp-input';
import {FormSelectContext, IdContext, OtpContext, RegisterContext} from "../App";
import Aos from "aos";
import API from "../api-service";
import {FormHelperText, TextField} from '@material-ui/core';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";


const Form1 = () => {

    const {form, setForm} = useContext(FormSelectContext)
    const {register, setRegister} = useContext(RegisterContext)

    const {otpContent, setOtpContent} = useContext(OtpContext)
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    const handleSubmit = () => {
            API.sendOtp(register.mobile).then(res => {
                setOtpContent(res.data['Details'])
                setForm(1)
            }).catch(error => console.log("Invalid Otp"))

    }
    return (<React.Fragment>
        <div data-aos={'fade-zoom-in'}><Grid container>
            <Grid item>
                <Paper elevation={5} style={{paddingLeft: 50, paddingTop: 20, borderRadius: '4%', paddingRight: 50}}>
                    <Grid container >
                        <Grid item xs={12}>
                            <p>Buy Now <br/><span style={{color: 'gray', fontSize: 13}}>due to high demand only limited seats are available</span>
                            </p>
                        </Grid>
                        <Grid item xs={8}>
                            <ValidatorForm

                                onSubmit={handleSubmit}
                                onError={(errors) => console.log(errors)}
                            >
                                <Grid item container>
                                    <Grid item>
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
                                    <Grid item>
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
                                    <Grid item>
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
                                    <Grid item>
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
                                    <Grid item style={{paddingTop: 10, paddingBottom: 30}}>
                                        <Button type="submit" variant={'contained'} style={{backgroundColor: '#19C8FF', color: 'white',}}>Proceed</Button>
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
    const [otp, setOtp] = useState("")
    const handlesubmit = (ootp) => {

        API.verifyOtp({sessionId: otpContent, otp: otp}).then(res => {
            setForm(2)
        }).catch(error => alert("wrong otp"))
    }
    useEffect(() => {

    }, [otp, otpContent])
    const handleChange = (otp) => {
        setOtp(otp)
    };
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
    const {id, setId} = useContext(IdContext)
    const {register, setRegister} = useContext(RegisterContext)

    const handleSubmit = () => {
        if(register.date&&register.slot)
        {
            setForm(3)
            // API.register(register).then(res => {
            //     setForm(3)
            // }).catch(
            //     error => {
            //         alert("Mobile Number Already registered")
            //     }
            // )
        }
        else {
            alert("Please select date and slot")
        }

        // API.update(id,{date:selectedDate,slot:slot}).then(res=>console.log("Ok tested")).catch(error=>alert('wrong details'))

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
                                    onClick={handleSubmit}
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
    const [orderId,setOrderId] = useState('')
    const handleOrderId = ()=>{

    }
    useEffect(()=>{
        API.getOrderId({name:register.name,amount:'50000'}).then(
            res=> {
                console.log('order_id',res.data['order_id'])
                setOrderId(res.data['order_id'])

            }).catch(error=>{
            console.log("no order id")

        })
    },[])
    var options = {
        "key": "rzp_test_L3hv3powYQMGQn", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Elixir Systems",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": {orderId}, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            console.log("payment_id",response.razorpay_payment_id)
            console.log("order_id",orderId)

            API.register({...register,payment_id:response.razorpay_payment_id,order_id:orderId,payment:true}).then(res => {
                    alert("Payment Made")
            }).catch(
                error => {
                    alert("Mobile Number Already registered")
                }
            )
            console.log(response)

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
        <div>
            <button id="rzp-button1" onClick={(e) => {
                rzp1.open();
                e.preventDefault();
            }}>Pay
            </button>


        </div>
    )
}
export {Form1, Form2, Form3, Form4}