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
    <a href={props.url} className="card-title" target="_blank">{props.name}</a>
    <div className="card-image" style={{backgroundImage: props.backgroundImage}}>
    </div>
    <div className="card-content">
        <div className="card-date">{props.date}</div>
        <div className="card-description"> {props.description}</div>
    </div>
</div>