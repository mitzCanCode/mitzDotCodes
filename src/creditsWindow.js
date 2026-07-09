import closeIconUrl from "./assets/icons/window-close.svg";

const creditsWindow = document.createElement("div");

creditsWindow.className = "window hidden";

creditsWindow.innerHTML = `
<div class="window-panel">

    <div class="window-header">

        <div class="window-title">
            CREDITS.TXT
        </div>

        <button
            type="button"
            class="window-close"
            aria-label="Close window"
        >
            <img class="window-close-icon" alt="">
        </button>

    </div>


    <div class="window-content">

    </div>


    <div class="window-footer">

        <div class="window-label">
            CREDITS DATABASE LOADED
        </div>

        <div class="window-label">
            READY
        </div>

    </div>


</div>
`;



document
.querySelector(".window-container")
?.appendChild(creditsWindow);



const closeButton =
creditsWindow.querySelector(".window-close");


const closeIcon =
creditsWindow.querySelector(".window-close-icon");


closeIcon.src = closeIconUrl;

const titleEl = creditsWindow.querySelector(".window-title");
const contentEl = creditsWindow.querySelector(".window-content");

const screenContent =
document.querySelector("#screenContent");



closeButton.addEventListener(
    "click",
    closeCreditsWindow
);



creditsWindow.addEventListener(
    "click",
    (event)=>{

        if(event.target === creditsWindow){
            closeCreditsWindow();
        }

    }
);



export async function openCreditsWindow(app){

    titleEl.textContent =
        app?.name || "CREDITS.TXT";


    contentEl.innerHTML =
        "<p>Loading...</p>";


    screenContent
    ?.classList
    .add("blur");


    creditsWindow
    .classList
    .remove("hidden");


    requestAnimationFrame(()=>{

        creditsWindow
        .classList
        .add("visible");

    });



    const markdown =
        await loadMarkdown(app.docFile);



    contentEl.innerHTML =
        markdown
        ? parseMarkdown(markdown)
        : "<p>Document not available.</p>";

}



export function closeCreditsWindow(){

    creditsWindow
    .classList
    .remove("visible");


    screenContent
    ?.classList
    .remove("blur");


    setTimeout(()=>{

        creditsWindow
        .classList
        .add("hidden");

    },250);

}

async function loadMarkdown(fileName){

    if(!fileName){
        return "";
    }


    try {

        const response = await fetch(
            new URL(`./assets/markdown/${fileName}`, import.meta.url)
        );


        if(!response.ok){
            return `## Unable to load ${fileName}`;
        }


        return await response.text();


    } catch(error){

        return `## Unable to load ${fileName}`;

    }

}


function escapeHtml(text){

    return text
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");

}



function parseMarkdown(raw){

    const lines = raw
        .replace(/\r\n/g,"\n")
        .split("\n");


    let html = "";
    let inList = false;


    for(const line of lines){


        if(line.startsWith("# ")){

            if(inList){
                html += "</ul>";
                inList = false;
            }


            html += `<h1>${escapeHtml(line.slice(2))}</h1>`;
            continue;

        }



        if(line.startsWith("## ")){

            if(inList){
                html += "</ul>";
                inList = false;
            }


            html += `<h2>${escapeHtml(line.slice(3))}</h2>`;
            continue;

        }



        if(line.startsWith("### ")){

            if(inList){
                html += "</ul>";
                inList = false;
            }


            html += `<h3>${escapeHtml(line.slice(4))}</h3>`;
            continue;

        }



        const listMatch = line.match(/^\s*[-*]\s+(.*)$/);


        if(listMatch){

            if(!inList){
                html += "<ul>";
                inList = true;
            }


            html += `<li>${escapeHtml(listMatch[1])}</li>`;

            continue;

        }



        if(line.trim() === ""){

            if(inList){
                html += "</ul>";
                inList = false;
            }
            else{
                html += "<br>";
            }


            continue;

        }



        html += `<p>${escapeHtml(line)}</p>`;

    }



    if(inList){
        html += "</ul>";
    }


    return html;

}
