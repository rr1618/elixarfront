import React,{useRef,useEffect,useState} from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import frame1 from '../assets/frame1.png'
import Paper from '@material-ui/core/Paper';
import eaie from '../assets/eaie.png'
import explorer from '../assets/explorer.png'
import conquerer from '../assets/conquerer.png'
import hardware from  '../assets/hardware.png'
import { useMediaQuery } from 'react-responsive'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Link} from 'react-router-dom'
import {Explorer,Conquerer,ExplorerShort,ConquererShort} from "./explorer";
import MediaCard from "./card";
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
const Frame1 = () =>
{
    const menu = Menu(list)
    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [show,setShow]=useState(false)
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
        <React.Fragment>

                <Grid container  className={'container'} style={{backgroundImage: "url("+`${frame1}`+")",}} justify="center"  alignItems={'center'}  >
                    <Grid className={'overlay'}   item container justify={'center'}>
                        {/*Navigation bar*/}
                        {!isPortrait?<Grid container item style={{backgroundColor:'rgb(53,44,72,.9)'}}  justify={'center'}  >
                            <Grid item lg={3}></Grid>
                            <Grid item container lg={4}>
                                <p id={'heading'}>Kalam <br/>Labs</p>
                            </Grid>
                            <Grid item container lg={5}
                                // spacing={5}
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
                        </Grid>:<div></div>}
                        {/* Eaie */}
                        <Grid  item lg={7} xs={11} style={{padding:5}} >
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
            <Grid container style={{height:'min-content',backgroundColor:'#F4F4F4',}} justify={'center'} alignItems={'center'}>
                <Grid item style={{marginTop:320}}>
                    <p id={'ina'} style={{}}>In a Scientific Studey Conducted by NCERT, the <br/>Students who taught with AR, achieved 50% more
                        <br/> marks than who studied just through Books.</p>
                    <p  id={'kalamlab'} style={{color:'#8373A5'}}>
                        Kalam Lab Augmented reality (AR) corses lets students and teachers overlay information, visuals,<br/> and other content into the real world, providing new context and powerful connections to enhance <br/> learning and build understanding. Our AR apps making existing lessons  to turn a boring lessons <br/> magical, make a science lesson as vivid as the real, and let you peer inside everyday objects to <br/> understand how they’re put together.
                    </p>
                </Grid>
            </Grid>
            <Grid container style={{backgroundColor:'#272330',color:'white',paddingTop:100,paddingBottom:100}} >
                <Grid item>
                    <p style={{marginLeft:170,fontWeight:'bold'}}>KALAM <br/> LABS</p>
                </Grid>
                <Grid item container justify={'center'} className={'kalamfooter'}  >
                    <Grid item lg={3}>
                        <p>'Innovation of The Year: 2019' <br/></p><span>-IISc Banglore</span>
                    </Grid>
                    <Grid item lg={3}>
                        <p>'‘Top Ten UnderGraduate Innovation Start-Up’' <br/></p><span>- Department of Science and Technology GOI & Tata Trust</span>
                    </Grid>
                    <Grid item lg={3}>
                        <p>'‘International Top 10 Higher Education Innovation’' <br/> </p><span>- Government of Finland</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={'container'} direction={'column'}   style={{textAlign:'center',backgroundImage: "url("+`${hardware}`+")"}} >
                <Grid item >
                    <p style={{color:'#C160E5' }}>Why Kalam Labs learning courses</p>
                </Grid>
                <Grid item>
                    <p id={'weteach'}>We teach you about the science. <br/> By changing how you see it.</p>
                </Grid>
                <Grid item >
                    <p>Kalam Labs augmented reality combines the digital and the real world. Our AR corses brings school <br/> subjects and information into the environment within an app, taking students beyond the screen and <br/> practically teaching in entirely new ways.</p>
                </Grid>
                <Grid item >
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
            </Grid>
            <Grid container direction={'column'} alignItems={'center'} >
                <Grid item>
                    <p style={{color:'#C160E5'}}>PEOPLE</p>
                </Grid>
                <Grid item>
                    <p id={'coursesare'}>Corses are designed by renowned educators <br/> to help students bring practicality into the heart <br/> of learning.</p>
                </Grid>
                <Grid item container lg={12}  justify={'center'} spacing={2} >
                    <Grid item lg={6} >
                    <Paper elevation={5} id={'anuradha'} >

                        <Grid container>
                            <Grid item lg={8}>
                                <p>Anuradha Mathur <br/> <span>HOD-Kalam Labs</span></p>
                                <p>Mrs Anuradha Madhur is one of the most celebrated <br/> Physisicts in India. She has been core authors of Physics <br/>NCERT Textbooks of Class 11th and 12th. She has <br/>previously taught at Harvard University, USA and ex- HOD<br/> Physics NCERT.<br/> <br/>At Kalam Labs, she guides students across Globe to Study<br/> Science Experimentally.</p>
                            </Grid>
                            <Grid item lg={4}>
                                <img src={conquerer} alt=""/>
                            </Grid>
                        </Grid>

                    </Paper>

                    </Grid>
                    <Grid item lg={8}>

                            <Grid container justify={"space-evenly"}>
                                {/*<ScrollMenu*/}
                                {/*    data={menu}*/}
                                {/*    arrowLeft={ArrowLeft}*/}
                                {/*    arrowRight={ArrowRight}*/}
                                {/*    // selected={selected}*/}
                                {/*    // onSelect={this.onSelect}*/}
                                {/*/>*/}
                                {/*<Grid item lg={3}><MediaCard/></Grid>*/}
                                {/*<Grid item lg={3}><MediaCard/></Grid>*/}
                                {/*<Grid item lg={3}><MediaCard/></Grid>*/}
                            </Grid>



                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default Frame1