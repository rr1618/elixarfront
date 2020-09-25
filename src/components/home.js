import React from "react";
import {
    Link,
    Element,
} from "react-scroll";
import Frame1 from "./frame1";
import Frame2 from "./frame2";
import Frame3 from "./frame3";
import Frame4 from "./frame4";
import Frame5 from "./frame5";
import About from "./about";
const Home = () =>
{
    return(
        <React.Fragment>
            <Element
                name="home" className="element">
                <Frame1/>
                <Frame2/>
                <Frame3/>
            </Element>

            <Element name="whykalam" className="element">
                <Frame4/>
            </Element>
            <Element name="people" className="element">
                <Frame5/>
            </Element>
            <Element name="about" className="element">
                <About/>
            </Element>



        </React.Fragment>
    )
}
export default Home