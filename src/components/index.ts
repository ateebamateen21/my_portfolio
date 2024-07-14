//PATH: src/components/index.ts

import NavBar from "./NavBar/NavBar";
export {NavBar};

import About from "./sections/About";
import Landing from "./sections/Landing";
import Github from "./sections/Github";
import HighlightedWork from "./sections/HighlightedWork";

export const sections ={
    About,
    Landing,
    Github,
    HighlightedWork,
};

//another route 
import ProjectSection from "./Projects/ProjectSection";
export {ProjectSection};


//just import the component directly in you main file