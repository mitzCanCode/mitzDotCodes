import { openProjectWindow } from "../projectWindow.js";
import appleIcon from "../assets/icons/apple.svg";

export default {

    name:"SoloLift",

    icon:appleIcon,

    category:"PROJECTS",

    docFile:"sololift.md",

    technicalDocFile:"sololift.technical.md",

    techStack:[
        { icon:"🍎", name:"Swift" },
        { icon:"📱", name:"SwiftUI" },
        { icon:"🧠", name:"Combine" }
    ],

    action(){
        openProjectWindow(this);
    }

};