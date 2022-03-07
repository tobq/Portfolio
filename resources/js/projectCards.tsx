import * as React from "react";

export default [
    {
        url: "https://www.beatstars.com/tobiq",
        name: "Tobi Productions",
        date: "Jan 2020",
        description: <div>
            As an avid fan of various genres of music, I started music production as a hobby.
            I've developed a music portfolio - using a content management system - at <a
            href="https://www.beatstars.com/tobiq">tobi.productions</a>
        </div>,
        backgroundImage: "image/tobi.productions.png",
    },
    {
        url: "voicebooks/index.html",
        name: "Voice Books",
        date: "Mar 2019",
        description: <div>
            Voice books is a mobile application I developed that automatically transcribes "voice books".<br/>
            Upon playback, the words are synchronised with the audio - at a user-defined playback speed.<br/>
            This project makes use of Google's Speech-To-Text API. There's an additional node.js server backing this
            project;
            doing things such as mediating transcription.
        </div>,
        backgroundVideo: "video/voicebooks.mp4",
        contain: true,
    },
    {
        url: "http://unicheap.herokuapp.com",
        name: "Uni.cheap",
        date: "Jan 2018",
        description: <div>
            An ecommerce website I built from scratch. This project is backed by a node.js server.
            <br/> As of 2019, I've disabled this websites checkout.
        </div>,
        backgroundImage: "image/unicheap.png",
    },
    {
        url: "https://1drv.ms/w/s!AnLTraYGkdweknVDPTqbAKcc2oGE",
        name: "Should Lethal Autonomous Weapon Systems be banned?",
        date: "May 2017",
        description: <div>A discussion about lethal robotics<br/><br/>
            In this dissertation, I investigate the topic of lethal autonomous weapon systems, exploring topics ranging
            through their effects on civilization, the ethicality of their use, the subsequence of their use and legal
            complications regarding the technology, in an attempt to conclude whether they should be used, or banned
        </div>,
        backgroundImage: "image/LAWS.png",
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
        backgroundImage: "image/mut8.png",
    },
    {
        url: "http://woch.herokuapp.com",
        name: "wach",
        date: "Sep 2016",
        description: "In this game, you play a flash-light-like object that can only see within their lit viewport. Players lose by being killed by another's beam of light, and gain points by beaming down others. Players also have a variety of auto-regenerating power-ups, which are triggered (and diminished) while their mouse is held down. The game was written in Javascript - both front and back end - and also utilises web sockets for connections between the server and players.",
        backgroundImage: "image/wach.png",
    },
    {
        url: "http://chalky.tobi.me.uk",
        name: "Chalky",
        date: "2015",
        description: "This 'Chalk-board' allows random users to leave messages anonymously, or with a name. The user also has the ability to create a drawing which will be re-animated on another users end using canvasing. The project uses a multitude of frameworks ranging from the PHP and MySQL database in the back-end the to Ajax data handling, HTML5 canvases and JavaScript running the front-end.",
        backgroundImage: "image/chalky.png",
    },
];
