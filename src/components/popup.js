import React from "react";
import "aos/dist/aos.css"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Logo from "../assets/kalamLogo.png";

import 'fontsource-roboto';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import TodayIcon from '@material-ui/icons/Today';
import ScheduleIcon from '@material-ui/icons/Schedule';
const Popup =()=>{
    return(
        <Grid container justify={'center'} style={{backgroundColor:'#F5FFFE',padding:15}} >
            <Grid item container md={6} xs={12} justify={'center'} style={{textAlign:'center'}}>
                <Grid item xs={12}>
                    <img src={Logo} height={150} width={200} style={{borderStyle:'solid',borderWidth:1,borderRadius:10,borderColor:'blue'}} alt=""/>
                </Grid>
                <Grid item>
                    <Paper elevation={1} style={{padding:'0 4px 0 4px'}}>
                        <h2>Scientific Explorer</h2>
                        <p><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/> <span>4.8</span> <span>471 Ratings</span></p>
                    </Paper>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item>
                    <Paper elevation={5}>
                        <Button variant={'outlined'}>Enroll Now</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <p>Sponsored By <br/><span>Elixar Systems, Happee Learning France, Ed Tech <br/> Council France</span></p>
                </Grid>
                <Grid item xs={12} >
                    <p style={{fontFamily:'Roboto'}}>About The Course <br/><span>An Augmented Reality Based Science Exploration <br/> based Active learning programme, to enable <br/>
                    Scientific Learning Among Students. AR Based <br/>
                    module, has been declared top international <br/> education by Finnish Government.</span></p>
                </Grid>
            </Grid>
            <Grid item container  xs={12} md={6} justify={'center'}>

                <Grid item  >
                    <Paper>
                        <Grid container className={'programeguide'}>
                            <Grid item lg={12}>
                                <Typography variant="h5" component="h2" gutterBottom><span><CardMembershipIcon/></span>
                                    Shareable Certificate <br/><em>Earn a Cerfiticate upon completion</em>
                                </Typography><Typography variant="h5" component="h2" gutterBottom><span><DesktopWindowsIcon/></span>
                                    100% Online <br/> <em>Start instantly and learn at your ouwn schedule</em>
                                </Typography><Typography variant="h5" component="h2" gutterBottom><span><TodayIcon/></span>
                                    Flexible Deadline <br/> <em> Reset deadlines in accordance to your schedule</em>
                                </Typography><Typography variant="h5" component="h2" gutterBottom><span><ScheduleIcon/></span>
                                    Approx 25 hours to complete <br/><em>Reset deadlines in accordance to your schedule</em>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container item md={7} xs={12} justify={'space-around'} >
                    <Grid item >
                        <img src={Logo} height={30} alt=""/>
                    </Grid>
                    <Grid item >
                        <img src={Logo} height={30} alt=""/>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={7} justify={'space-between'} >
                    <Grid item xs={6}>
                        <p>Anuradha Mathur <span>HOD Kalam Labs <br/>ex-HOD Physics, NCERT India,<br/>Swayyam India Platform</span></p>
                    </Grid>
                    <Grid item xs={6}>
                        <p>Luc Piaton <span> CEO, Happee Learning France. <br/> French Educationalist</span></p>
                    </Grid>
                </Grid>

                </Grid>
            </Grid>

    )
}
export default Popup