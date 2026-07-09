import closeIconUrl from "../assets/icons/window-close.svg";
import certificateIcon from "../assets/icons/paper.svg";


const skillsWindow = document.createElement("div");


skillsWindow.className = "window hidden";


skillsWindow.innerHTML = `

<div class="window-panel">


    <div class="window-header">

        <div class="window-title">
            SKILLS.EXE
        </div>


        <button
            class="window-close"
            type="button"
            aria-label="Close window"
        >

            <img 
                class="window-close-icon"
                alt=""
            >

        </button>

    </div>





    <div class="window-content">


        <div class="stats-grid">







            <div class="stat-box">

                <div class="stat-title">
                    EXPERIENCE DAYS
                </div>

                <div 
                    class="stat-value"
                    id="experienceDays"
                >
                    
                </div>

            </div>





            <div class="stat-box">

                <div class="stat-title">
                    CERTIFICATIONS
                </div>

                <div class="stat-value">
                    2
                </div>

            </div>


        </div>







        <div class="skills-section">


            <div class="window-label">
                CERTIFICATIONS
            </div>



            <div 
                class="certificate-list"
                id="certificateList"
            >

            </div>


        </div>








        <div class="skills-section">


            <div class="window-label">
                TECHNOLOGIES
            </div>



            <div class="technology-section">



                <div class="technology-group">


                    <h3>
                        BACKEND
                    </h3>


                    <div 
                        class="tech-pill-container"
                        id="backendTech"
                    ></div>


                </div>







                <div class="technology-group">


                    <h3>
                        FRONTEND
                    </h3>


                    <div 
                        class="tech-pill-container"
                        id="frontendTech"
                    ></div>


                </div>







                <div class="technology-group">


                    <h3>
                        TOOLS
                    </h3>


                    <div 
                        class="tech-pill-container"
                        id="toolsTech"
                    ></div>


                </div>



            </div>


        </div>



    </div>






    <div class="window-footer">


        <div class="window-label">
            SKILL DATABASE LOADED
        </div>


        <div class="window-label">
            READY
        </div>


    </div>



</div>

`;



document
.querySelector(".window-container")
?.appendChild(skillsWindow);





const closeButton =
skillsWindow.querySelector(".window-close");



const closeIcon =
skillsWindow.querySelector(".window-close-icon");


closeIcon.src = closeIconUrl;



const screenContent =
document.querySelector("#screenContent");







closeButton.addEventListener(
    "click",
    closeSkillsWindow
);



skillsWindow.addEventListener(
    "click",
    (event)=>{


        if(event.target === skillsWindow){

            closeSkillsWindow();

        }


    }
);









/*
========================
 EXPERIENCE CALCULATOR
========================
*/


function calculateExperienceDays(){


    const startDate =
    new Date("2023-02-22");



    const today =
    new Date();



    const difference =
    today - startDate;



    return Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );


}









/*
========================
 CERTIFICATIONS
========================
*/


const certificates = [
    {
        name:
        "Certified Associate JavaScript Programmer",

        file:
        "jsa.pdf"
    },

    {
        name:
        "Certified Associate Python Programmer",

        file:
        "pcap.pdf"
    }
];





function renderCertificates(){
    const container =
    skillsWindow.querySelector(
        "#certificateList"
    );

    container.innerHTML =
    certificates
    .map(cert=>`
        <div class="certificate-item">
            <img 
                src="${certificateIcon}"
                alt="certificate"
            >

            <span>
                ${cert.name}
            </span>

            <button
                class="download-cert"
                data-file="${cert.file}"
                data-name="${cert.name}"
            >
                DOWNLOAD
            </button>
        </div>
    `)
    .join("");
}









skillsWindow.addEventListener(
"click",
(event)=>{


    const button =
    event.target.closest(
        ".download-cert"
    );



    if(!button){

        return;

    }



    const confirmed =
    confirm(
        `Download ${button.dataset.name}?`
    );



    if(!confirmed){

        return;

    }




    const link =
    document.createElement("a");



    link.href =
    new URL(
        `../../assets/certificates/${button.dataset.file}`,
        import.meta.url
    );



    link.download =
    button.dataset.file;



    document.body.appendChild(link);


    link.click();


    link.remove();



});









/*
========================
 TECHNOLOGIES
========================
*/


const technologies = {
    backend:[
        "Python",
        "Java",
        "C",
        "Swift"
    ],

    frontend:[
        "JavaScript",
        "Tailwind CSS",
        "SwiftUI"
    ],

    tools:[
        "Docker",
        "Git",
        "Bash",
        "RevenueCat",
        "Firebase",
        "Cloudflare"
    ]
};







function renderTechnologyList(
    element,
    list
){


    element.innerHTML =
    list
    .map(
        tech=>`

        <span class="tech-pill">
            ${tech}
        </span>

        `
    )
    .join("");

}







function renderTechnologies(){


    renderTechnologyList(

        skillsWindow.querySelector(
            "#backendTech"
        ),

        technologies.backend

    );



    renderTechnologyList(

        skillsWindow.querySelector(
            "#frontendTech"
        ),

        technologies.frontend

    );



    renderTechnologyList(

        skillsWindow.querySelector(
            "#toolsTech"
        ),

        technologies.tools

    );


}









/*
========================
 GITHUB DATA
========================
*/


async function loadGithubStats(){


    /*
        Replace this later with your
        GitHub contribution API.

        Example:

        githubContributions.textContent =
        data.currentYear;

        totalContributions.textContent =
        data.total;

    */


    skillsWindow.querySelector(
        "#githubContributions"
    )
    .textContent =
    "API";



    skillsWindow.querySelector(
        "#totalContributions"
    )
    .textContent =
    "API";


}









/*
========================
 OPEN WINDOW
========================
*/


export function openSkillsWindow(){



    skillsWindow
    .classList
    .remove("hidden");



    screenContent
    ?.classList
    .add("blur");



    skillsWindow
    .querySelector("#experienceDays")
    .textContent =
    calculateExperienceDays();



    renderCertificates();


    renderTechnologies();


    loadGithubStats();




    requestAnimationFrame(()=>{


        skillsWindow
        .classList
        .add("visible");


    });


}









/*
========================
 CLOSE WINDOW
========================
*/


export function closeSkillsWindow(){



    skillsWindow
    .classList
    .remove("visible");



    screenContent
    ?.classList
    .remove("blur");



    setTimeout(()=>{


        skillsWindow
        .classList
        .add("hidden");


    },250);



}