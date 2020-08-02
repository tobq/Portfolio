import * as React from "react";
import "../sass/card.scss";

export interface LogoCardProps {
    url: string,
    date: string,
    image: string,
}

export default (props: LogoCardProps) => <a className="logo-card" href={props.url}>
    <img src={props.image} alt="Yapily"/>
    <div className="logo-card-date">{props.date}</div>
</a>