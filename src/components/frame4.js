import hardware from "../assets/2.jpg";
import hardwaremoible from "../assets/2mobile.jpg";
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
    return(<Grid container className={'container'} direction={'column'}   style={isPortrait?{textAlign:'center',backgroundImage: "url("+`${hardware}`+")",backgroundSize:'contain' +
            '',padding:15}:{textAlign:'center',backgroundSize:'cover',backgroundImage: "url("+`${hardware}`+")",padding:15}}  >
        <Grid item  >
            <div
                data-aos={'slide-up'}
            >
                <p style={{color:'#C160E5' }}>Why Kalam Labs learning courses</p>
            </div>

        </Grid>
        <Grid item >
            <div
                data-aos={'slide-up'}
                data-aos-delay="100"

            >
            <p id={'weteach'}>We teach you about the science. <br/> By changing how you see it.</p>
            </div>
        </Grid>
        <Grid item >
            <div
                data-aos={'slide-up'}
                data-aos-delay="100"

            >
            <p style={{color:'#8373A5'}}>Kalam Labs augmented reality combines the digital and the real world. Our AR corses brings school <br/> subjects and information into the environment within an app, taking students beyond the screen and <br/> practically teaching in entirely new ways.</p>
            </div>
        </Grid>
        <Grid item >
            <div
                data-aos={'slide-up'}
                data-aos-delay="100"
            >
                <p style={{color:'#8373A5'}}>• Spark engagement through movement and lifelike exploration <br/>
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