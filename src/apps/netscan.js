import { openProjectWindow } from "../projectWindow.js";

export default {

    name:"NetScan",

    icon:"🧪",

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