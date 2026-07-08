import { openProjectWindow } from "../projectWindow.js";
import retroComputerIcon from "../assets/icons/retro-pc-solid.svg";

export default {

    name:"NetScan",

    icon:retroComputerIcon,

    category:"PROJECTS",

    docFile:"netscan.md",

    technicalDocFile:"netscan.technical.md",

    techStack:[
        { icon:"🐍", name:"Python" },
        { icon:"🌐", name:"sockets" },
        { icon:"⚡", name:"async IO" }
    ],

    action(){

        openProjectWindow(this);

    }

};