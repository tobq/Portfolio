import "../sass/main.scss";
import recording from "./recording";
import * as ReactDOM from "react-dom";
import * as React from "react";
import TypeWriter from "./TypeWriter";
import SKILLS from "./Skills";
import workCards, {CardProps} from "./workCards";
import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";
import projectCards from "./projectCards";

const summary = document.getElementById("home-summary");
const skills = document.getElementById("home-skills");
const experience = document.getElementById("experience-cards");
const projects = document.getElementById("project-cards");
let PENDING_RENDERS = 4;

const ref = React.createRef<TypeWriter>();

function onRendered() {
    PENDING_RENDERS--;
    if (PENDING_RENDERS === 0) {
        // setTimeout(() => {
        let loading = document.getElementById("loading-overlay");
        let spinner = loading.querySelector(".tobi-spinner");
        let spinningO = spinner.querySelector("span");
        // freeze animation
        spinningO.style.transform = getComputedStyle(spinningO).transform;
        spinningO.style.animation = "none";
        // force render of div, so css can transition
        // (without, the changes are batched together and no transition occurs)
        spinningO.offsetHeight;
        spinner.classList.add("disabled");
        loading.classList.remove("active");


        // animate rendered refs
        for (let i = 0; i < skillRefs.length; i++) {
            setTimeout(() => skillRefs[i].current.classList.add("active"), i * 200);// Delays by 200ms
        }
        // }, 1000);
    }
}

const skillRefs: React.RefObject<HTMLDivElement>[] = [];
ReactDOM.render(SKILLS.map((skill, i) => {
    const ref = React.createRef<HTMLDivElement>();
    skillRefs[i] = ref;
    return <div className="skill" ref={ref}>{skill}</div>
}), skills, onRendered);

ReactDOM.render(<TypeWriter recording={recording} ref={ref}/>, summary, onRendered);
summary.addEventListener("click", event => {
    ref.current.run();
});

ReactDOM.render(renderCards(workCards), experience, onRendered);
ReactDOM.render(renderCards(projectCards), projects, onRendered);


function renderCards(cardProps: CardProps[]) {
    return cardProps.map(cardProp =>
        "backgroundImage" in cardProp ?
            <ImageCard {...cardProp}/> :
            <VideoCard {...cardProp}/>
    );
}

// TODO: IMAGE URL ICON
// TODO: PROJECTS LINK SCROLL DOWN
// TODO: ADD MORE PROJECTS
// TODO: ADD COMPANY LOGOS 
// TODO: fractal background
// todo: Use preact
// TODO: MOVE CARDDATA/SKILLS TO A DATA PACKAGE
// TODO: MODULARISE IMAGE/VIDEO CARD COMPONENTS TO BE POLYMORPHIC
