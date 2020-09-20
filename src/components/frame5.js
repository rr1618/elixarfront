import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import conquerer from "../assets/conquerer.png";
import React from "react";


const Frame5=()=>{
    return(<Grid container justify={'center'}  >
        <Grid item xs={12} >
            <p style={{color:'#C160E5',textAlign:'center'}}>PEOPLE</p>
        </Grid>
        <Grid item lg={12}>
            <p id={'coursesare'}>Corses are designed by renowned educators <br/> to help students bring practicality into the heart <br/> of learning.</p>
        </Grid>
        <Grid item container lg={12}  justify={'center'} >
            <Grid item xs={8} >
                <Paper elevation={5} id={'anuradha'} >

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

        </Grid>
    </Grid>)
}
export default Frame5