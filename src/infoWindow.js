import closeIconUrl from "./assets/icons/window-close.svg";

const infoWindow = document.createElement("div");

infoWindow.className = "window hidden";

infoWindow.innerHTML = `
  <div class="window-panel">
    <div class="window-header">
      <div class="window-title"></div>

      <button 
        type="button" 
        class="window-close" 
        aria-label="Close window"
      >
        <img class="window-close-icon" alt="">
      </button>
    </div>

    <div class="window-content"></div>
  </div>
`;

const appendInfoWindow = () => {
    const container = document.querySelector(".window-container");

    if (container) {
        container.appendChild(infoWindow);
    }
};

appendInfoWindow();


const titleEl = infoWindow.querySelector(".window-title");
const contentEl = infoWindow.querySelector(".window-content");

const closeButton = infoWindow.querySelector(".window-close");
const closeIconEl = infoWindow.querySelector(".window-close-icon");

closeIconEl.src = closeIconUrl;


const screenContent = document.querySelector("#screenContent");


let currentApp = null;



closeButton.addEventListener(
    "click",
    closeInfoWindow
);


infoWindow.addEventListener(
    "click",
    (event) => {

        if(event.target === infoWindow){
            closeInfoWindow();
        }

    }
);



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





export async function openInfoWindow(app){


    currentApp = app;


    titleEl.textContent = app?.name || "";

    contentEl.innerHTML = "<p>Loading...</p>";



    if(screenContent){
        screenContent.classList.add("blur");
    }



    infoWindow.classList.remove("hidden");


    requestAnimationFrame(() => {

        infoWindow.classList.add("visible");

    });



    const markdown = await loadMarkdown(app.docFile);



    contentEl.innerHTML = markdown
        ? parseMarkdown(markdown)
        : "<p>Document not available.</p>";

}





export function closeInfoWindow(){


    infoWindow.classList.remove("visible");


    if(screenContent){
        screenContent.classList.remove("blur");
    }



    setTimeout(() => {

        infoWindow.classList.add("hidden");

    },250);

}





if(typeof window !== "undefined"){

    window.openInfoWindowGlobal = openInfoWindow;

}