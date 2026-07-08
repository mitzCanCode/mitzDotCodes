import { openProjectWindow } from "../projectWindow.js";
import retroComputerIcon from "../assets/icons/retro-pc-solid.svg";
import pythonIcon from "../assets/icons/snake.svg";


export default {

    name:"NetScan",

    icon:retroComputerIcon,

    category:"PROJECTS",

    docFile:"netscan.md",

    technicalDocFile:"netscan.technical.md",

    techStack:[
        { icon: pythonIcon, name:"Python" }
    ],

    action(){

        openProjectWindow(this);

    },
    links: [
        {
            text: "[GitHub]",
            url: "https://github.com/mitzCanCode/netscan"
        }
]

};

