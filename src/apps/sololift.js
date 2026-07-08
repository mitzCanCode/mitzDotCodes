import { openProjectWindow } from "../projectWindow.js";
import appleIcon from "../assets/icons/apple.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
import cloudflareIcon from "../assets/icons/cloudflare.svg";
import dollarIcon from "../assets/icons/dollar.svg";

export default {

    name:"SoloLift",

    icon:appleIcon,

    category:"PROJECTS",

    docFile:"sololift.md",

    technicalDocFile:"sololift.technical.md",

    techStack:[
        { icon:appleIcon, name:"SwiftUI" },
        { icon:firebaseIcon, name:"Firebase" },
        { icon:cloudflareIcon, name:"Cloudflare hosting" },
        { icon:dollarIcon, name:"Revenue Cat" }
    ],

    action(){
        openProjectWindow(this);
    },
    links: [
        {
            text: "[Website]",
            url: "https://sololift.app"
        }
    ]
};