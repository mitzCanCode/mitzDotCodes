import { openProjectWindow } from "../projectWindow.js";

export default {

    name:"OhShint",

    icon:"🛡",

    category:"PROJECTS",

    docFile:"ohshint.md",

    technicalDocFile:"ohshint.technical.md",

    techStack:[
        { icon:"🐍", name:"Python" },
        { icon:"🛡", name:"Security" },
        { icon:"🌐", name:"Network IO" }
    ],

    action(){

        openProjectWindow(this);

    }

};