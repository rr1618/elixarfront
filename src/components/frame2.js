import Grid from "@material-ui/core/Grid";
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import frame1 from "../assets/1.jpg";
import mountain from '../assets/mountain.png'

const Frame2 = ()=>{
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return(
        <Grid container style={{height:'min-content',backgroundColor:'#F4F4F4',backgroundImage: "url("+`${mountain}`+")"}} justify={'center'} alignItems={'center'}>
            <Grid item style={{marginTop:'70vh'}} xs={11}>
                <div
                    data-aos={'fade-up'}
                >
                    <p id={'ina'}>In a Scientific Studey Conducted by NCERT, the <br/>Students who taught with AR, achieved 50% more
                        <br/> marks than who studied just through Books.</p>
                </div>
                <div
                    data-aos={'fade-up'}
                    data-aos-delay="300"
                >
                <p  id={'kalamlab'} style={{color:'#8373A5'}}>
                    Kalam Lab Augmented reality (AR) corses lets students and teachers overlay information, visuals,<br/> and other content into the real world, providing new context and powerful connections to enhance <br/> learning and build understanding. Our AR apps making existing lessons  to turn a boring lessons <br/> magical, make a science lesson as vivid as the real, and let you peer inside everyday objects to <br/> understand how they’re put together.
                </p>
                </div>
            </Grid>
        </Grid>
    )
}
export default Frame2