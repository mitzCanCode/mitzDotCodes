import "./style.css";

const screen = document.querySelector("#screenContent");

screen.innerHTML = `
<div class="terminal">

    <p class="boot">INITIALIZING...</p>

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
const ascii = document.querySelector(".ascii");
const ticker = document.querySelector(".ticker");
const tickerTrack = document.querySelector(".ticker-track");
const button = document.querySelector(".enter-system");

setTimeout(() => {
    boot.classList.add("fade-out");

    setTimeout(() => {
        boot.remove();

        ascii.classList.remove("hidden");
        ticker.classList.remove("hidden");

        const tickerGroup = tickerTrack.querySelector(".ticker-group");
        if (tickerGroup) {
            const distance = tickerGroup.getBoundingClientRect().width;
            tickerTrack.style.setProperty("--ticker-distance", `${distance}px`);
        }

        ascii.classList.add("fade-in");
        ticker.classList.add("fade-in");

        setTimeout(() => {
            button.classList.remove("hidden");
            button.classList.add("fade-in");
        }, 500);

    }, 500);

}, 1200);