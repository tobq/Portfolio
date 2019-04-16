import "../sass/main.scss";
import recording from "./recording";
import * as ReactDOM from "react-dom";
import * as React from "react";
import TypeWriter from "./TypeWriter";
import SKILLS from "./Skills";

const summary = document.getElementById("home-summary");
const skills = document.getElementById("home-skills");

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
