import "../sass/main.scss";
import recording from "./recording";
import * as ReactDOM from "react-dom";
import * as React from "react";
import TypeWriter from "./TypeWriter";
import SKILLS from "./Skills";
import cardData from "./cardData";
import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";

const summary = document.getElementById("home-summary");
const skills = document.getElementById("home-skills");
const content = document.getElementById("content");

const ref = React.createRef<TypeWriter>();
ReactDOM.render(<TypeWriter recording={recording} ref={ref}/>, summary);
summary.addEventListener("click", event => {
    ref.current.run();
});
ReactDOM.render(SKILLS.map((skill, i) => {
    const ref = React.createRef<HTMLDivElement>();
    const div = <div className="skill" ref={ref}>{skill}</div>;
    setTimeout(() => ref.current.classList.add("active"), i * 200);// Delays by 200ms
    return div
}), skills);

ReactDOM.render(cardData.map(cardProps => {
    return "backgroundImage" in cardProps ?
        <ImageCard {...cardProps}/> :
        <VideoCard {...cardProps}/>
}), content);


// TODO: IMAGE URL ICON
// TODO: PROJECTS LINK SCROLL DOWN
// TODO: ADD MORE PROJECTS
// TODO: ADD COMPANY LOGOS 
// TODO: FIX SPACING
// TODO: MOVE CARDDATA/SKILLS TO A DATA PACKAGE
// TODO: MODULARISE IMAGE/VIDEO CARD COMPONENTS TO BE POLYMORPHIC
