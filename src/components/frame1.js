import React, {useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import {useMediaQuery} from "react-responsive";
import Grid from "@material-ui/core/Grid";
import frame1 from "../assets/frame1.png";
import Paper from "@material-ui/core/Paper";
import eaie from "../assets/eaie.png";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from "./navbar";
import logo from '../assets/logo.png'
import medal from '../assets/medal.jpg'
import {Conquerer, ConquererShort, Explorer, ExplorerShort} from "./explorer";
import {
    Link,
} from "react-scroll";



const Frame1=()=>{
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [show,setShow]=useState(false)
    const [drawer, setDrawer] = useState(false)
    useEffect(()=>{
        window.scrollTo(0,0)
        const float = document.getElementById("explorer")
        const pos  = float.offsetTop
        const scrollCallBack=window.addEventListener("scroll",()=> {

            if(window.pageYOffset>pos){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
        return ()=>{window.removeEventListener("scroll",scrollCallBack)}

    },[])
    return(
            <Grid container  className={'container1'} style={{backgroundImage: "url("+`${frame1}`+")",}} justify="center"  alignItems={'center'}  >
                <Grid className={'overlay'}   item container justify={'center'}>
                    {!isPortrait?<Nav/>:<div style={{width:'100%'}} >
                        <Grid   container
                                style={{backgroundColor:'#15111F'}} >
                            <Grid item container xs={5} md={5}
                                  justify="flex-start">
                                <Grid item >
                                    <img src={logo} height={40} style={{marginLeft:5,marginTop:13}}  alt=""/>
                                </Grid>
                                <Grid item >
                                    <p style={{color:'white',fontWeight:'bolder'}}>KALAM <br/>LABS</p>
                                </Grid>
                            </Grid>
                            <Grid item container xs={7} md={7} justify="flex-end"
                                  alignItems="center">
                                <Grid item>
                                    <Button onClick={() => {
                                        setDrawer(true)
                                    }}><MenuIcon style={{fontSize: 40, color: 'white'}}/></Button>
                                </Grid>

                            </Grid>

                        </Grid>
                        <SwipeableDrawer
                            open={drawer}
                            onClose={() => setDrawer(false)}
                        >
                            <Grid container justify={'center'} alignItems={'center'} direction={'column'} style={{
                                width: '70vw',
                                height: '120vh',
                                color: 'white',
                                backgroundColor:'#15111F'

                            }} spacing={5}>
                                <Grid item>
                                    <img style={{padding: 10}} src={logo} height={50} alt=""/>

                                </Grid>

                                <Grid item>
                                    <Link
                                        to="whykalam"
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={1000}
                                        style={{padding: 10}}
                                        onClick={() => {
                                            setDrawer(false)
                                        }}
                                    >
                                        Why Kalam
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        to="about"
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                        style={{padding: 10}}
                                        onClick={() => {
                                            setDrawer(false)
                                        }}
                                    >
                                        About
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        to="people"
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                        style={{padding: 10}}
                                        onClick={() => {
                                            setDrawer(false)
                                        }}
                                    >
                                        People
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        to="about"
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                        style={{padding: 10}}
                                        onClick={() => {
                                            setDrawer(false)
                                        }}
                                    >
                                        About
                                    </Link>
                                </Grid>
                                {/*<Grid item>*/}
                                {/*    <Link*/}
                                {/*        to="contact"*/}
                                {/*        spy={true}*/}
                                {/*        hashSpy={true}*/}
                                {/*        smooth={true}*/}
                                {/*        duration={500}*/}
                                {/*        style={{padding: 10}}*/}
                                {/*        onClick={() => {*/}
                                {/*            setDrawer(false)*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        Contact Us*/}
                                {/*    </Link>*/}
                                {/*</Grid>*/}

                            </Grid>
                        </SwipeableDrawer>
                    </div>}
                    {/* Eaie */}
                    <Grid  item md={8}  xs={11} style={{marginTop:80}} >
                        <Paper elevation={5} style={isPortrait?{ padding:20,borderRadius:25}:{ padding:5,borderRadius:25}}>
                            <Grid container justify={!isPortrait?'center':'flex-start'}  >
                                <Grid item xs={2} md={1} >
                                    <img src={logo} height={50} alt="" style={{marginLeft:15}}/>
                                </Grid>
                                <Grid item md={10}>
                                    <p id={'kalam'} style={{color:'#8373A5',fontSize:'15px'}}> Kalam labs has Won the International Education Innovation Award by Finland Government. Out of 1400 entries, Elixar System’s Kalam Labs has won the Global Title. </p>
                                </Grid>
                                <Grid item xs={2} md={1}>
                                    <img src={medal} height={50} style={{marginLeft:15}} alt=""/>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>


                        <Grid  item xs={12} >
                            <div
                                data-aos="slide-up"
                            >
                            <p id={'learnscience'}>Learn science <br/> the practical way.</p>
                            </div>
                            <div
                                data-aos="slide-up"
                                data-aos-delay="200"
                            >
                            <p id={'withau'}>With our Augmented Reality courses designed for Indian school students</p>
                            </div>
                        </Grid>


                    <Grid item container justify={'center'} style={{marginTop:100}} sm={6} md={11} lg={7}>
                        <Grid item className={'warrior'}  xs={11} md={3} lg={5}>
                            {show?<div className={'float'} style={{zIndex:2}} ><ExplorerShort/></div>:<div id={'explorer'}><Explorer /></div>}


                        </Grid>
                        <Grid item className={'warrior'}  xs={10} md={3} lg={5}>
                            {show&&!isPortrait?<div className={'dfloat'} style={{zIndex:2}}><ConquererShort /></div>:<div id={'explorer'}>{isPortrait?<div></div>:<Conquerer/>}</div>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            )
}
export default Frame1