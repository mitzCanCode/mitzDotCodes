import { openProjectWindow } from "../projectWindow.js";
import searchIcon from "../assets/icons/search.svg";
import pythonIcon from "../assets/icons/snake.svg";

export default {

    name:"OhShint",

    icon:searchIcon,

    category:"PROJECTS",

    docFile:"ohshint.md",

    technicalDocFile:"ohshint.technical.md",

    techStack:[
        { icon: pythonIcon, name:"Python" }
    ],

    action(){

        openProjectWindow(this);

    },
    links: [
        {
            text: "[GitHub]",
            url: "https://github.com/mitzCanCode/OhShint"
        }
    ]

};