import { openProjectWindow } from "../projectWindow.js";
import searchIcon from "../assets/icons/search.svg";

export default {

    name:"OhShint",

    icon:searchIcon,

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