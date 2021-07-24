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
import LogoCard from "./LogoCard";

const summary = document.getElementById("home-summary");
const skills = document.getElementById("home-skills");
const experience = document.getElementById("experience-cards");
const projects = document.getElementById("project-cards");
let PENDING_RENDERS = 4;

const typeWriterRef = React.createRef<TypeWriter>();

let portfolio_hostname = "tobi.akinyemi.org";
const portfolio_url = "https://" + portfolio_hostname;
if (window.location.hostname !== portfolio_hostname && /(.+\\.)?akinyemi.org/.test(window.location.hostname)) {
    window.location.href = portfolio_url
}

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


        // start type-writer
        typeWriterRef.current.run();

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

ReactDOM.render(<TypeWriter recording={recording} playbackSpeed={1.5} ref={typeWriterRef}/>, summary, onRendered);
summary.addEventListener("click", event => {
    typeWriterRef.current.run();
});

ReactDOM.render(renderCards(workCards), experience, onRendered);
ReactDOM.render(renderCards(projectCards), projects, onRendered);


function renderCard(props: CardProps) {
    return "backgroundVideo" in props ? <VideoCard {...props}/> :
        "description" in props ? <ImageCard {...props}/> :
            <LogoCard {...props}/>;
}

function renderCards(cardProps: CardProps[]) {
    return cardProps.map(renderCard);
}

// TODO: IMAGE URL ICON
// TODO: PROJECTS SMOOTH LINK SCROLL DOWN
// TODO: ADD MORE PROJECTS
// TODO: ADD COMPANY LOGOS
// TODO: fractal background
// todo: Use preact
// TODO: MOVE CARDDATA/SKILLS TO A DATA PACKAGE
// TODO: MODULARISE IMAGE/VIDEO CARD COMPONENTS TO BE POLYMORPHIC
