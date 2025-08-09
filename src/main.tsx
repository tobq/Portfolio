import "./styles/main.scss";
import recording from "./data/recording";
import { createRoot } from "react-dom/client";
import React, { useRef, useEffect, useState } from "react";
import TypeWriter, { TypeWriterHandle } from "./components/TypeWriter";
import SKILLS from "./data/Skills";
import workCards, { CardProps } from "./data/workCards";
import ImageCard from "./components/ImageCard";
import VideoCard from "./components/VideoCard";
import projectCards from "./data/projectCards";
import LogoCard from "./components/LogoCard";

// Redirect old domains to tobi.bio
const targetDomain = "tobi.bio";
const targetUrl = `https://${targetDomain}`;
if (window.location.hostname !== targetDomain && window.location.hostname !== "localhost") {
    if (/(.+\.)?akinyemi\.(org|co\.uk|uk)/.test(window.location.hostname) || 
        window.location.hostname === "tobq.github.io") {
        window.location.href = targetUrl;
    }
}

function renderCard(props: CardProps, index: number) {
    const card = "backgroundVideo" in props ? <VideoCard {...props} /> :
        "description" in props ? <ImageCard {...props} /> :
            <LogoCard {...props} />;
    return <React.Fragment key={index}>{card}</React.Fragment>;
}

function renderCards(cardProps: CardProps[]) {
    return <>{cardProps.map((props, i) => renderCard(props, i))}</>;
}

// Separate component for TypeWriter with its click handler
function SummarySection() {
    const typeWriterRef = useRef<TypeWriterHandle>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            // Start typewriter after mounting
            setTimeout(() => {
                typeWriterRef.current?.run();
            }, 100);
        }
    }, [mounted]);

    const handleClick = () => {
        typeWriterRef.current?.run();
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <TypeWriter ref={typeWriterRef} recording={recording} playbackSpeed={1.5} />
        </div>
    );
}

// Skills section component
function SkillsSection() {
    const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            // Animate skills after mounting
            skillRefs.current.forEach((ref, i) => {
                if (ref) {
                    setTimeout(() => ref.classList.add("active"), i * 200);
                }
            });
        }
    }, [mounted]);

    return (
        <>
            {SKILLS.map((skill, i) => (
                <div 
                    key={skill} 
                    className="skill" 
                    ref={el => { skillRefs.current[i] = el; }}
                >
                    {skill}
                </div>
            ))}
        </>
    );
}

// Initialize React app
const initApp = () => {
    const summary = document.getElementById("home-summary");
    const skills = document.getElementById("home-skills");
    const experience = document.getElementById("experience-cards");
    const projects = document.getElementById("project-cards");
    const loading = document.getElementById("loading-overlay");

    if (summary && skills && experience && projects) {
        // Remove loading overlay after components mount
        setTimeout(() => {
            if (loading) {
                const spinner = loading.querySelector(".tobi-spinner");
                const spinningO = spinner?.querySelector("span") as HTMLElement;
                
                if (spinningO && spinner) {
                    // Freeze animation
                    spinningO.style.transform = getComputedStyle(spinningO).transform;
                    spinningO.style.animation = "none";
                    // Force render
                    spinningO.offsetHeight;
                    spinner.classList.add("disabled");
                    loading.classList.remove("active");
                }
            }
        }, 100);

        // Mount components to their containers
        createRoot(summary).render(<SummarySection />);
        createRoot(skills).render(<SkillsSection />);
        createRoot(experience).render(<>{renderCards(workCards)}</>);
        createRoot(projects).render(<>{renderCards(projectCards)}</>);
    }
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}