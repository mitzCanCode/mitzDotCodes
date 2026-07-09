import closeIconUrl from "../assets/icons/window-close.svg";
import discordIcon from "../assets/icons/discord.svg";
import emailIcon from "../assets/icons/at.svg";
import credlyIcon from "../assets/icons/paper.svg";
import tryhackmeIcon from "../assets/icons/cloud.svg";
import githubIcon from "../assets/icons/github.svg";

const connectWindow = document.createElement("div");

connectWindow.className = "window hidden";


connectWindow.innerHTML = `

<div class="window-panel">


    <div class="window-header">

        <div class="window-title">
            CONNECT.EXE
        </div>


        <button
            type="button"
            class="window-close"
            aria-label="Close window"
        >

            <img 
                class="window-close-icon"
                alt=""
            >

        </button>


    </div>



    <div class="window-meta">

        <div class="window-label">
            PROFILE STATUS
        </div>


        <div class="connect-status">

            <span class="status-light"></span>

            AVAILABLE FOR CONTACT

        </div>


    </div>





    <div class="window-content">


        <div class="connect-list">

            <div class="connect-item">

                <div class="connect-icon">
                    <img src="${githubIcon}" alt="GitHub">
                </div>


                <div class="connect-details">

                    <div class="connect-name">
                        GitHub
                    </div>


                    <div class="connect-value">
                        GitHub Profile
                    </div>

                </div>


                <button
                    class="connect-action"
                    data-url="https://github.com/mitzCanCode"
                >
                    OPEN
                </button>


            </div>



            <div class="connect-item">

                <div class="connect-icon">
                    <img src="${discordIcon}" alt="Discord">
                </div>


                <div class="connect-details">

                    <div class="connect-name">
                        Discord
                    </div>


                    <div class="connect-value">
                        mitzcancode
                    </div>

                </div>


                <button
                    class="connect-action"
                    data-copy="mitzcancode"
                >
                    COPY
                </button>


            </div>





            <div class="connect-item">

                <div class="connect-icon">
                    <img src="${emailIcon}" alt="Email">
                </div>


                <div class="connect-details">

                    <div class="connect-name">
                        Email
                    </div>


                    <div class="connect-value">
                        dimitris.chatzi@proton.me
                    </div>

                </div>


                <button
                    class="connect-action"
                    data-url="mailto:dimitris.chatzi@proton.me"
                >
                    SEND
                </button>


            </div>






            <div class="connect-item">

                <div class="connect-icon">
                    <img src="${credlyIcon}" alt="Credly">
                </div>


                <div class="connect-details">

                    <div class="connect-name">
                        Credly
                    </div>


                    <div class="connect-value">
                        Certifications Profile
                    </div>

                </div>


                <button
                    class="connect-action"
                    data-url="https://www.credly.com/users/dimitris-chatzigeorgiou"
                >
                    OPEN
                </button>


            </div>






            <div class="connect-item">

                <div class="connect-icon">
                    <img src="${tryhackmeIcon}" alt="TryHackMe">
                </div>


                <div class="connect-details">

                    <div class="connect-name">
                        TryHackMe
                    </div>


                    <div class="connect-value">
                        Security Profile
                    </div>

                </div>


                <button
                    class="connect-action"
                    data-url="https://tryhackme.com/p/mitzCanCode"
                >
                    OPEN
                </button>


            </div>


        </div>



            </div>





            <div class="window-footer">


                <div class="window-label">
                    5 CONNECTION METHODS LOADED
                </div>


                <div 
                    class="window-label"
                    id="connect-message"
                >
                    READY
                </div>


            </div>



</div>

`;





const container = document.querySelector(".window-container");


if(container){

    container.appendChild(connectWindow);

}




const closeButton =
connectWindow.querySelector(".window-close");


const closeIcon =
connectWindow.querySelector(".window-close-icon");


closeIcon.src = closeIconUrl;



const screenContent =
document.querySelector("#screenContent");



const message =
connectWindow.querySelector("#connect-message");






closeButton.addEventListener(
    "click",
    closeConnectWindow
);




connectWindow.addEventListener(
    "click",
    (event)=>{

        if(event.target === connectWindow){

            closeConnectWindow();

        }

    }
);







connectWindow.addEventListener(
"click",
async(event)=>{


const button =
event.target.closest(".connect-action");



if(!button){

    return;

}



if(button.dataset.url){


window.open(
    button.dataset.url,
    "_blank",
    "noopener,noreferrer"
);


message.textContent="OPENED";


}




if(button.dataset.copy){

    try {

        if (navigator.clipboard && window.isSecureContext) {

            await navigator.clipboard.writeText(
                button.dataset.copy
            );

        } else {

            const textarea = document.createElement("textarea");

            textarea.value = button.dataset.copy;

            textarea.style.position = "fixed";
            textarea.style.opacity = "0";

            document.body.appendChild(textarea);

            textarea.focus();

            textarea.select();

            document.execCommand("copy");

            textarea.remove();

        }


        message.textContent = "COPIED";


    } catch(error) {

        console.error("Copy failed:", error);

        message.textContent = "COPY FAILED";

    }

}



setTimeout(()=>{

message.textContent="READY";

},1500);



});









export function openConnectWindow(){


if(screenContent){

screenContent.classList.add("blur");

}



connectWindow.classList.remove("hidden");



requestAnimationFrame(()=>{

connectWindow.classList.add("visible");

});


}








export function closeConnectWindow(){


connectWindow.classList.remove("visible");



if(screenContent){

screenContent.classList.remove("blur");

}



setTimeout(()=>{

connectWindow.classList.add("hidden");

},250);



}