import { openProjectWindow } from "../projectWindow.js";
import gamepadIcon from "../assets/icons/gaming.svg";
import retroComputerIcon from "../assets/icons/retro-pc-solid.svg";
import themeIcon from "../assets/icons/themes.svg";

export default {

    name:"Tetris",

    icon:gamepadIcon,

    category:"PROJECTS",

    docFile:"tetris.md",

    technicalDocFile:"tetris.technical.md",

    techStack:[
        { icon:retroComputerIcon, name:"C" },
        { icon:themeIcon, name:"ANSI" }
    ],

    action(){

        openProjectWindow(this);

    }

};