import {ImageCardProps} from "./ImageCard";
import * as React from "react";
import {VideoCardProps} from "./VideoCard";

const cardData: (VideoCardProps | ImageCardProps)[] = [
    {
        url: "https://www.forestrock.co.uk/ev/",
        name: "Energy Vision",
        date: "2018",
        description: "I'm the lead developer on the Energy Vision product distributed by Forest Rock Ltd. It's a engineering / GUI tool use for Building Management Systems (BMS) to help evaluate resource usage across buildings. Technologies used vary through: Java, Gradle, GIT, JavaScript, ReactJS, Typescript and Tridium's Niagara Framework",
        backgroundImage: "url(image/ev.jpg)",
    },
    {
        url: "https://rawgit.com/tobq/mut8/master/index.html",
        name: "mut8",
        date: "Oct 2016",
        description: <div>
            This is an implementation of a genetic algorithm, in which creatures evolve to run as fast as
            possible. I made use of the Box2D front end physics engine for the physics simulation<br/>
            <span id="note">
					The project can be viewed on  <a style={{color: "#7777AA"}} href="http://github.com/tobq/mut8">github here</a>
				</span>
        </div>,
        backgroundImage: "url(image/mut8.png)",
    },
    {
        url: "http://woch.herokuapp.com",
        name: "wach",
        date: "Sep 2016",
        description: "In this game, you play a flash-light-like object that can only see within their lit viewport. Players lose by being killed by another's beam of light, and gain points by beaming down others. Players also have a variety of auto-regenerating power-ups, which are triggered (and diminished) while their mouse is held down. The game was written in Javascript - both front and back end - and also utilises web sockets for connections between the server and players.",
        backgroundImage: "url(image/wach.png)",
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
        url: "http://chalky.tobi.me.uk",
        name: "Chalky",
        date: "2015",
        description: "This 'Chalk-board' allows random users to leave messages anonymously, or with a name. The user also has the ability to create a drawing which will be re-animated on another users end using canvasing. The project uses a multitude of frameworks ranging from the PHP and MySQL database in the back-end the to Ajax data handling, HTML5 canvases and JavaScript running the front-end.",
        backgroundImage: "url(image/chalky.png)",
    },
];
export default cardData;
