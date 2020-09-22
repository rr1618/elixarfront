import React, {useContext, useState} from "react";
import {FormSelectContext, RegisterContext} from "../App";
import API from "../api-service";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {TextField} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const Form3 = () => {
    const {form, setForm} = useContext(FormSelectContext)

    const {register, setRegister} = useContext(RegisterContext)
    const [color,setColor]=useState('outlined')
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        console.log(event.target.checked)
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const handleSubmit = () => {
        API.register(register).then(res => {
            setForm(3)
        }).catch(
            error => {
                alert("Mobile Number Already registered")
            }
        )
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
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Checkbox checked={state.checkedA} onChange={handleChange} style={{height:80,width:20}} name="checkedA" />}
                                        label="Secondary"
                                    />
                                </FormGroup>
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

export default Form3