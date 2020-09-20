import hardware from "../assets/hardware.png";
import Grid from "@material-ui/core/Grid";
import React from "react";

const Frame4=()=>{
    return(<Grid container className={'container'}   style={{textAlign:'center',backgroundImage: "url("+`${hardware}`+")"}} justify={'center'} >
        <Grid item xs={10} lg={12} >
            <p style={{color:'#C160E5' }}>Why Kalam Labs learning courses</p>
        </Grid>
        <Grid item xs={10} lg={12}>
            <p id={'weteach'}>We teach you about the science. <br/> By changing how you see it.</p>
        </Grid>
        <Grid item xs={10} lg={12}>
            <p>Kalam Labs augmented reality combines the digital and the real world. Our AR corses brings school <br/> subjects and information into the environment within an app, taking students beyond the screen and <br/> practically teaching in entirely new ways.</p>
        </Grid>
        <Grid item xs={10} lg={12}>
            <div >
                <p>• Spark engagement through movement and lifelike exploration <br/>
                    • Visualise and experiment with abstract concepts<br/>
                    • Go deeper into hidden layers and systems<br/>
                    • Tell stories in a whole new way<br/>
                    • See both the big picture and the details<br/>
                    • Interact with resources otherwise not available<br/>
                    • Complement existing curricula<br/>
                    • Extend projects and provide challenges<br/></p>
            </div>

        </Grid>
    </Grid>)
}
export default Frame4