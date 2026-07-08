import { openProjectWindow } from "../projectWindow.js";

export default {

    name:"Tetris",

    icon:"🎮",

    category:"PROJECTS",

    docFile:"tetris.md",

    technicalDocFile:"tetris.technical.md",

    techStack:[
        { icon:"💻", name:"C" },
        { icon:"🎮", name:"ANSI" },
        { icon:"⚙️", name:"Game Logic" }
    ],

    action(){

        openProjectWindow(this);

    }

};