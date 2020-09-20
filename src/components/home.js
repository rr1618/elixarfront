import React,{useRef,useEffect,useState} from "react";
import { useMediaQuery } from 'react-responsive'
import Frame1 from "./frame1";
import Frame2 from "./frame2";
import Frame3 from "./frame3";
import Frame4 from "./frame4";
import Frame5 from "./frame5";
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
const Home = () =>
{
    const menu = Menu(list)
    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return(
        <React.Fragment>
            <Frame1/>
            <Frame2/>
            <Frame3/>
            <Frame4/>
            <Frame5/>


        </React.Fragment>
    )
}
export default Home