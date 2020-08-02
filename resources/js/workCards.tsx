import {ImageCardProps} from "./ImageCard";
import * as React from "react";
import {VideoCardProps} from "./VideoCard";
import {LogoCardProps} from "./LogoCard";

export type CardProps = VideoCardProps | ImageCardProps | LogoCardProps;
let cards: CardProps[] = [
    {
        url: "https://yapily.com",
        image: "/image/yapily.svg",
        date: "Jul 2020"
    },
    {
        url: "https://www.forestrock.co.uk",
        name: "Energy Vision",
        date: "Mar 2018",
        description: "I was the lead developer on a product called Energy Vision product, at Forest Rock Ltd. Energy Vision is a data analytics tool used within buildings to help evaluate resource usage across as well as the quality of data being captured by building meters. Technologies used range through: Java, Gradle, GIT, JavaScript, ReactJS, Typescript and Tridium's Niagara Framework",
        backgroundImage: "image/ev.jpg",
    },
    {
        url: null,
        name: "Pool-cam",
        date: "Aug 2016",
        description: <div>
            Another masterful shot... Captured in High-Distortion by the Pool-Cam system I worked on.<br/>
            <span id="note">This was later rectified, using automatic image manipulation, based on the rectangular bounds of the pool table.</span>
        </div>,
        backgroundVideo: "video/pool.mp4",
    },
    {
        url: "https://www.instagram.com/thatsuccessshow",
        name: "That Success Show",
        date: "May 2016",
        description: `I worked with PremierModa to create the website for their web-series: "That Success Show" - a show about luxury and success.`,
        backgroundImage: "image/TSS.png"
    },
];
export default cards;
