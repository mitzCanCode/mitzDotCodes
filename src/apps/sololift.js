import { openProjectWindow } from "../projectWindow.js";

export default {

    name:"SoloLift",

    icon:"📱",

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