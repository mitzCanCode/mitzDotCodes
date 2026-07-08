import { openProjectWindow } from "../projectWindow.js";
import gamepadIcon from "../assets/icons/gaming.svg";

export default {

    name:"Tetris",

    icon:gamepadIcon,

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