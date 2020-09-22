import Grid from "@material-ui/core/Grid";
import React from "react";


const Frame2 = ()=>{
    return(
        <Grid container style={{height:'min-content',backgroundColor:'#F4F4F4',}} justify={'center'} alignItems={'center'}>
            <Grid item style={{marginTop:'70vh'}} xs={11}>
                <p id={'ina'}>In a Scientific Studey Conducted by NCERT, the <br/>Students who taught with AR, achieved 50% more
                    <br/> marks than who studied just through Books.</p>
                <p  id={'kalamlab'} style={{color:'#8373A5'}}>
                    Kalam Lab Augmented reality (AR) corses lets students and teachers overlay information, visuals,<br/> and other content into the real world, providing new context and powerful connections to enhance <br/> learning and build understanding. Our AR apps making existing lessons  to turn a boring lessons <br/> magical, make a science lesson as vivid as the real, and let you peer inside everyday objects to <br/> understand how they’re put together.
                </p>
            </Grid>
        </Grid>
    )
}
export default Frame2