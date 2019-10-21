import {ImageCardProps} from "./ImageCard";
import * as React from "react";
import {VideoCardProps} from "./VideoCard";

export type CardProps = VideoCardProps | ImageCardProps;
export default [
    {
        url: "https://www.forestrock.co.uk/n4energymanager/",
        name: "Energy Vision",
        date: "Mar 2018",
        description: "I'm the lead developer on the Energy Vision product distributed by Forest Rock Ltd. It's a engineering / GUI tool use for Building Management Systems (BMS) to help evaluate resource usage across buildings. Technologies used vary through: Java, Gradle, GIT, JavaScript, ReactJS, Typescript and Tridium's Niagara Framework",
        backgroundImage: "url(image/ev.jpg)",
    },
    {
        url: null,
        name: "Pool-cam",
        date: "Aug 2016",
        description: <div>
            Another masterful shot... Captured in High-Distortion by the Pool-Cam system I worked on.<br/>
            <span id="note">This was later rectified, using automatic image manipulation, based on the rectangular bounds of the pool table.</span>
        </div>,
        src: "video/pool.mp4",
    },
    {
        url: "https://www.instagram.com/thatsuccessshow",
        name: "That Success Show",
        date: "May 2016",
        description: `I worked with PremierModa to create the website for their web-series: "That Success Show" - a show about luxury and success.`,
        backgroundImage: "url(image/TSS.png)"
    },
];
