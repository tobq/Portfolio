import * as React from "react";
import "../sass/card.scss";

export interface ImageCardProps {
    url: string,
    name: string,
    date: string,
    description: React.ReactNode | React.ReactNodeArray,
    backgroundImage: string,
}

export default (props: ImageCardProps) => <div className="card">
    <a className="card-link" href={props.url} target="_blank">
    <div className="card-title">{props.name}</div>
    <div className="card-image" style={{backgroundImage: `url(${props.backgroundImage})`}}/>
    </a>
    <div className="card-content">
        <div className="card-date">{props.date}</div>
        <div className="card-description"> {props.description}</div>
    </div>
</div>