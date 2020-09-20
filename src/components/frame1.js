import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import Grid from "@material-ui/core/Grid";
import frame1 from "../assets/frame1.png";
import Paper from "@material-ui/core/Paper";
import eaie from "../assets/eaie.png";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import {Conquerer, ConquererShort, Explorer, ExplorerShort} from "./explorer";
import MediaCard from "./card";
import {
    Link,
    Element,
} from "react-scroll";
const list = [
    { name: 'Shasakt Tripathi' },
    { name: 'Harshit Awasthi' },
    { name: 'Ahmad Faraz' },

];
const MenuItem = ({text, selected}) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list) =>
    list.map(el => {
        const {name} = el;

        return <MediaCard text={name} key={name}  />;
    });
const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};
const Frame1=()=>{
    const menu = Menu(list)
    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [show,setShow]=useState(false)
    const [drawer, setDrawer] = useState(false)
    useEffect(()=>{
        window.scrollTo(0,0)
        const float = document.getElementById("explorer")
        const pos  = float.offsetTop
        const scrollCallBack=window.addEventListener("scroll",()=> {
            console.log(window.pageYOffset,pos)
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
                    {!isPortrait?<Grid container item style={{backgroundColor:'rgb(53,44,72,.9)'}}  justify={'center'}  >
                        <Grid item lg={3}></Grid>
                        <Grid item container lg={4}>
                            <p id={'heading'}>Kalam <br/>Labs</p>
                        </Grid>
                        <Grid item container lg={5}
                              className={'navitems'}>
                            <Grid item>
                                <p>Why Kalam</p>
                            </Grid>
                            <Grid item>
                                <p>People</p>
                            </Grid>
                            <Grid item>
                                <p>About</p>
                            </Grid>
                            <Grid item>
                                <p>Book A Free Trial</p>
                            </Grid>
                        </Grid>
                    </Grid>:<div style={{width:'100%'}} >
                        <Grid   container  justify={"space-between"} style={{backgroundColor:'#15111F'}} >
                            <Grid item lg={4}>
                                <p style={{paddingLeft:10,color:'white',fontWeight:'bolder'}} >KALAM <br/> LABS</p>
                            </Grid>
                            <Grid item lg={7}>
                                <Button onClick={() => {
                                    setDrawer(true)
                                }}><MenuIcon style={{fontSize: 40, color: 'white'}}/></Button>
                            </Grid>

                        </Grid>
                        <SwipeableDrawer
                            open={drawer}
                            onClose={() => setDrawer(false)}
                        >
                            <Grid container justify={'center'} alignItems={'center'} direction={'column'} style={{
                                width: '70vw',
                                height: '120vh',
                                color: 'yellow',
                                background: 'linear-gradient(to right, #247982, #89CFE9)'
                            }} spacing={5}>
                                <Grid item>
                                    <img style={{padding: 10}} src={'logo'} height={100} alt=""/>

                                </Grid>

                                <Grid item>
                                    <Link
                                        to="home"
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        duration={1000}
                                        style={{padding: 10}}
                                        onClick={() => {
                                            setDrawer(false)
                                        }}
                                    >
                                        Home
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        to="about"
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
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
                                        to="service"
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        duration={500}
                                        style={{padding: 10}}
                                        onClick={() => {
                                            setDrawer(false)
                                        }}
                                    >
                                        Services
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        to="work"
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        duration={500}
                                        style={{padding: 10}}
                                        onClick={() => {
                                            setDrawer(false)
                                        }}
                                    >
                                        Work
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        to="contact"
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        duration={500}
                                        style={{padding: 10}}
                                        onClick={() => {
                                            setDrawer(false)
                                        }}
                                    >
                                        Contact Us
                                    </Link>
                                </Grid>

                            </Grid>
                        </SwipeableDrawer>
                    </div>}
                    {/* Eaie */}
                    <Grid  item lg={7} xs={11} style={{marginTop:30}} >
                        <Paper elevation={5} style={isPortrait?{ padding:20,borderRadius:25}:{ padding:5,borderRadius:25}}>
                            <Grid container justify={!isPortrait?'space-evenly':''} alignItems={'center'}>
                                <Grid item lg={2}>
                                    <img src={eaie} alt=""/>
                                </Grid>
                                <Grid item lg={8}>
                                    <p id={'kalam'} style={{color:'#8373A5',fontSize:'15px'}}>Kalam Labs is representing Asia in the International Education Summit, Helsinki. We need your vote to make India proud & lead Ed-Tech revolution. Voting ends in 02:34 M</p>
                                </Grid>
                                <Grid item lg={2}>
                                    <Button variant={'contained'} style={{backgroundColor:'#8373A5',color:'white',borderRadius:25}}>Vote Now</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid  item lg={12} >
                        <p id={'learnscience'}>Learn science <br/> the practical way.</p>
                        <p id={'withau'}>With our Augmented Reality courses designed for Indian school students</p>
                    </Grid>

                    <Grid item container justify={'space-evenly'} style={{marginTop:100}} lg={7}>
                        <Grid item className={'warrior'}  xs={11} lg={5}>
                            {show?<div className={'float'}><ExplorerShort/></div>:<div id={'explorer'}><Explorer /></div>}


                        </Grid>
                        <Grid item className={'warrior'}  xs={10} lg={5}>
                            {show?<div className={'dfloat'}><ConquererShort/></div>:<div id={'explorer'}>{isPortrait?<div></div>:<Conquerer/>}</div>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            )
}
export default Frame1