import React, {useContext, useEffect, useState} from "react";
import {FormSelectContext, RegisterContext} from "../App";
import API from "../api-service";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {TextField} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const Demo = () => {
    const {register, setRegister} = useContext(RegisterContext)
    const [orderId,setOrderId] = useState('')
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


    return (<React.Fragment>
                <div> <button id="rzp-button1" onClick={(e) => {
                    rzp1.open();
                    e.preventDefault();
                }}>Pay
                </button>{orderId}</div>
    </React.Fragment>)
}

export default Demo