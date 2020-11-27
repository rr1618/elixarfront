import Grid from "@material-ui/core/Grid";
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import {useMediaQuery} from "react-responsive";
import mountain from '../assets/mountain.png'

const Frame2 = ()=>{
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return(
        <Grid container style={isPortrait?{height:'min-content',backgroundColor:'#F4F4F4',backgroundImage: "url("+`${mountain}`+")"}:{height:'100vh',backgroundColor:'#F4F4F4',backgroundImage: "url("+`${mountain}`+")"}} justify={'center'} alignItems={'center'}>
            <Grid item style={isPortrait?{marginTop:'60vh'}:{marginTop:'40vh'}} xs={11}>
                <div
                    data-aos={'fade-up'}
                >
                    <p id={'ina'} style={{textTransform:'capitalize'}}>NCERT Study proves AR learning increases marks by 50%
                    </p>
                </div>
                <div
                    data-aos={'fade-up'}
                    data-aos-delay="300"
                >
                <p  id={'kalamlab'} style={{color:'white'}}>
                    Students are taught the essential scientific skill-sets of Experimentation and Observation. These skills help students <br/> learn on their own, and never be dependent on a tutor or coaching.

                </p>
                </div>
            </Grid>
        </Grid>
    )
}
export default Frame2