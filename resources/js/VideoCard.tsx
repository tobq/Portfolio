import * as React from "react";
import "../sass/card.scss";

export interface VideoCardProps {
    url: string,
    name: string,
    date: string,
    description: React.ReactNode | React.ReactNodeArray,
    src: string,
    contain?: boolean
}

export default (props: VideoCardProps) => <div className="card">
    <a href={props.url} className="card-title" target="_blank">{props.name}</a>
    <div className="card-video-con">
        <video src={props.src} autoPlay loop muted className={props.contain ? "card-video-contain" : "card-video"}/>
    </div>
    <div className="card-content">
        <div className="card-date">{props.date}</div>
        <div className="card-description"> {props.description}</div>
    </div>
</div>