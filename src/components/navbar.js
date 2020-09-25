import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid";
import './nav.css'

import {
    Link,
    Element,
} from "react-scroll";
const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor:'rgb(53,44,72,.9)',
    },

});
const Nav = ()=>
{
    useEffect(()=>{
        window.scrollTo(0,0)
        var scrollPos = 0;
        const element = document.getElementById("navbar")
        const scrollCallBack=window.addEventListener("scroll",()=> {
            if ((document.body.getBoundingClientRect()).top < scrollPos)
            {
                element.style.backgroundColor='rgbA(53,44,72,1)'
            }
            else{
                element.style.backgroundColor='rgbA(53,44,72,.7)'
            }

        })
        return ()=>{window.removeEventListener("scroll",scrollCallBack)}

    },[])
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <React.Fragment>
            <Grid container id={'navbar'}  justify={'center'} className={'navbar'}  style={{textAlign:'center',color:'#8A808E'}}>
                <Grid item md={5}>
                    <p style={{color:'white',fontWeight:'bolder'}}>KALAM <br/>LABS</p>
                </Grid>
                <Grid item container justify={'center'}  md={4}>
                    <Grid item md={3}>
                        <Link
                            activeClass="active"
                            to="whykalam"
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            duration={1000}
                            offset={-100}


                        >
                            <p>Why Kalam</p>
                        </Link>
                    </Grid>
                    <Grid item md={3}>
                        <Link
                            to="people"
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            duration={1000}
                            offset={-100}

                        >
                            <p>People</p>
                        </Link>
                    </Grid>
                    <Grid item md={3}>
                        <Link
                            to="about"
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            duration={1000}
                            offset={-100}
                        >
                            <p>About</p>
                        </Link>
                    </Grid>
                    <Grid item md={3}>
                        <Link
                            to="trial"
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            duration={1000}
                            offset={50}


                        >
                            <p>Book A Free AR Trail</p>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item></Grid>

            </Grid>
        </React.Fragment>


    );
}

export default Nav