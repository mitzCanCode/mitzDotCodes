import "./style.css";

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


    <button class="enter-system hidden">
        [ ENTER SYSTEM ]
    </button>


</div>
`;

const boot = document.querySelector(".boot");
const bootDots = document.querySelector(".boot-dots");
const ascii = document.querySelector(".ascii");
const ticker = document.querySelector(".ticker");
const button = document.querySelector(".enter-system");

const dotStates = [".", "..", "..."];
let dotIndex = 0;
let dotCycleCount = 0;
const totalCycles = 3;
const totalDotSteps = dotStates.length * totalCycles; // 3 full cycles

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
    }, 500);
};

const bootDotInterval = setInterval(() => {
    bootDots.textContent = dotStates[dotIndex];
    dotIndex = (dotIndex + 1) % dotStates.length;
    dotCycleCount += 1;

    if (dotCycleCount >= totalDotSteps) {
        clearInterval(bootDotInterval);
        setTimeout(finishBoot, 360);
    }
}, 360);