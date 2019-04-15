import "../sass/main.scss";
import recording from "./recording";
import * as ReactDOM from "react-dom";
import * as React from "react";
import TypeWriter from "./TypeWriter";

const homeText = document.getElementById("home-text");
const ref = React.createRef<TypeWriter>();
ReactDOM.render(<TypeWriter recording={recording} ref={ref}/>, homeText);
homeText.addEventListener("click", event => {
    ref.current.run();
});