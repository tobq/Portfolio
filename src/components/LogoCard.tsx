import React from "react";
import "../styles/card.scss";

export interface LogoCardProps {
    url: string;
    date: string;
    image: string;
}

const LogoCard = (props: LogoCardProps) => <a className="logo-card" href={props.url} target="_blank">
    <img src={props.image} alt="Company Logo"/>
    <div className="logo-card-date">{props.date}</div>
</a>;

export default LogoCard;