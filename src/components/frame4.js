import hardware from "../assets/2.jpg";
import hardwaremobile from "../assets/2mobile.jpg";
import Grid from "@material-ui/core/Grid";
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import {useMediaQuery} from "react-responsive";
const Frame4=()=>{
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    useEffect(() => {

        Aos.init({duration: 1000,
            // disable:'mobile'
        })
    }, [])
    return(<Grid container className={'container'}
                 style={isPortrait?{textAlign:'center',backgroundImage: "url("+`${hardwaremobile}`+")"}:
        {textAlign:'center',backgroundSize:'cover',backgroundImage: "url("+`${hardware}`+")"}}  >
        <Grid item container className={'overlay'} justify={'center'} style={{padding:10}}>
            <Grid item  xs={12}>
                <div
                    data-aos={'slide-up'}
                >
                    <p style={{color:'white' }}>Why Kalam Labs learning courses</p>
                </div>

            </Grid>
            <Grid item xs={12}>
                <div
                    data-aos={'slide-up'}
                    data-aos-delay="100"

                >
                    <p id={'weteach'} style={{color:'white'}}>We teach Science through 21st Century tech.Books, Blackboards, and Videos are out-dated. Stop Making Kids learn through it.

                        Our AR Courses lets you Experience Science projected in your Home
                    </p>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div
                    data-aos={'slide-up'}
                    data-aos-delay="100"

                >
                    <p style={{color:'white'}}>Kalam Labs augmented reality combines the digital and the real world. Our AR corses brings school <br/> subjects and information into the environment within an app, taking students beyond the screen and <br/> practically teaching in entirely new ways.</p>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div
                    data-aos={'slide-up'}
                    data-aos-delay="100"
                >
                    <p style={{color:'white'}}>• Spark engagement through movement and lifelike exploration <br/>
                        • Visualise and experiment with abstract concepts<br/>
                        • Go deeper into hidden layers and systems<br/>
                        • Tell stories in a whole new way<br/>
                        • See both the big picture and the details<br/>
                        • Interact with resources otherwise not available<br/>
                        • Complement existing curricula<br/>
                        • Extend projects and provide challenges<br/></p>
                </div>

            </Grid>
        </Grid>

    </Grid>)
}
export default Frame4