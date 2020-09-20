import Grid from "@material-ui/core/Grid";
import React from "react";

const Frame3 = ()=>{
    return(<div style={{backgroundColor:'#272330',color:'white',paddingTop:100,paddingBottom:100}}>

        <Grid container   justify="center"
               className={'kalamfooter'}>
            <Grid item xs={11}>
                <p id={'kalamlabdark'}>KALAM <br/> LABS</p>
            </Grid>
                <Grid item xs={11} lg={3}>
                    <p>'Innovation of The Year: 2019' <br/></p><span>-IISc Banglore</span>
                </Grid>
                <Grid item xs={11} lg={3}>
                    <p>'‘Top Ten UnderGraduate<br/> Innovation Start-Up’' </p><span>- Department of Science and Technology GOI & Tata Trust</span>
                </Grid>
                <Grid item xs={11} lg={3}>
                    <p>'‘International Top 10 Higher Education Innovation’' <br/> </p><span>- Government of Finland</span>
                </Grid>

        </Grid>
    </div>)
}
export default Frame3