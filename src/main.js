import "./style.css";
import { createDesktop } from "./desktop.js";
import About from "./apps/about.js";
import Contact from "./apps/contact.js";
import Skills from "./apps/skills.js";
import SoloLift from "./apps/sololift.js";
import NetScan from "./apps/netscan.js";
import OhShint from "./apps/ohshint.js";
import Tetris from "./apps/tetris.js";

const screen = document.querySelector("#screenContent");

screen.innerHTML = `
<div class="terminal">
    <p class="boot">INITIALIZING<span class="boot-dots"></span></p>

    <div class="logo-container">
        <pre class="ascii hidden">
███╗   ███╗██╗████████╗███████╗
████╗ ████║██║╚══██╔══╝╚══███╔╝
██╔████╔██║██║   ██║     ███╔╝
██║╚██╔╝██║██║   ██║    ███╔╝
██║ ╚═╝ ██║██║   ██║   ███████╗
╚═╝     ╚═╝╚═╝   ╚═╝   ╚══════╝
        </pre>

        <div class="ticker hidden">
            <div class="ticker-track">
                <div class="ticker-group">
                    <span>SOFTWARE ENGINEER</span>
                    <span>*</span>
                    <span>FULL STACK DEVELOPMENT</span>
                    <span>*</span>
                    <span>IOS APPLICATIONS</span>
                    <span>*</span>
                    <span>WEB APPLICATIONS</span>
                    <span>*</span>
                    <span>SERVERS</span>
                    <span>*</span>
                </div>
                <div class="ticker-group">
                    <span>SOFTWARE ENGINEER</span>
                    <span>*</span>
                    <span>FULL STACK DEVELOPMENT</span>
                    <span>*</span>
                    <span>IOS APPLICATIONS</span>
                    <span>*</span>
                    <span>WEB APPLICATIONS</span>
                    <span>*</span>
                    <span>SERVERS</span>
                    <span>*</span>
                </div>
            </div>
        </div>
    </div>

    <button class="enter-system hidden" type="button">[ ENTER SYSTEM ]</button>
</div>

<div id="desktop" class="desktop hidden"></div>
`;

const boot = screen.querySelector(".boot");
const bootDots = screen.querySelector(".boot-dots");
const ascii = screen.querySelector(".ascii");
const ticker = screen.querySelector(".ticker");
const button = screen.querySelector(".enter-system");
const terminal = screen.querySelector(".terminal");
const desktop = screen.querySelector("#desktop");

const apps = [About, Contact, Skills, SoloLift, NetScan, OhShint, Tetris];
const dotStates = [".", "..", "..."];
let dotIndex = 0;
let dotCycleCount = 0;
const totalCycles = 3;
const totalDotSteps = dotStates.length * totalCycles;

button.disabled = true;


const finishBoot = () => {

    boot.classList.add("fade-out");


    setTimeout(() => {

        boot.remove();

        ascii.classList.remove("hidden");
        ticker.classList.remove("hidden");
        button.classList.remove("hidden");

        ascii.classList.add("fade-in");
        ticker.classList.add("fade-in");
        button.classList.add("fade-in");
        button.disabled = false;


    },500);

};



const openDesktop = () => {
    if (button.disabled) return;

    terminal.classList.add("fade-out");

    setTimeout(() => {
        terminal.remove();

        createDesktop(apps, desktop);

        desktop.classList.remove("hidden");
        desktop.classList.add("fade-in");
    }, 300);
};



button.addEventListener(
    "click",
    openDesktop
);



const bootDotInterval = setInterval(() => {

    bootDots.textContent = dotStates[dotIndex];

    dotIndex = (dotIndex + 1) % dotStates.length;

    dotCycleCount++;


    if(dotCycleCount >= totalDotSteps){

        clearInterval(bootDotInterval);

        setTimeout(
            finishBoot,
            360
        );

    }

},360);