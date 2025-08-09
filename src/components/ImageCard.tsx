import React from "react";
import "../styles/card.scss";

export interface ImageCardProps {
    url: string | null;
    name: string;
    date: string;
    description: React.ReactNode | React.ReactNodeArray;
    backgroundImage: string;
}

const ImageCard = (props: ImageCardProps) => <div className="card">
    <a className="card-link" href={props.url || "#"} target="_blank">
        <div className="card-title">{props.name}</div>
        <div className="card-image" style={{backgroundImage: `url(${props.backgroundImage})`}}/>
    </a>
    <div className="card-content">
        <div className="card-date">{props.date}</div>
        <div className="card-description">{props.description}</div>
    </div>
</div>;

export default ImageCard;