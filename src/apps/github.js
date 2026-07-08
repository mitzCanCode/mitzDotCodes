import githubIcon from "../assets/icons/github.svg";

export default {

    name:"github.com",

    icon: githubIcon,

    category:"GENERAL",

    action(){
        window.open("https://github.com/mitzCanCode", "_blank");
    }

};