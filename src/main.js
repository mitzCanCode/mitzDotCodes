import './style.css'

const screen = document.querySelector('#screenContent');

const lines = [
  { text: "SYSTEM ONLINE...", type: "system" },
  { text: "", type: "" },

  { text: "IDENTITY:", type: "label" },
  { text: "MITZ", type: "value" },

  { text: "", type: "" },

  { text: "ROLE:", type: "label" },
  { text: "SOFTWARE ENGINEER", type: "value" },

  { text: "", type: "" },

  { text: "MISSION:", type: "label" },
  { text: "Building scalable web experiences", type: "mission" },
  { text: "and digital products that feel alive.", type: "mission" },

  { text: "", type: "" },
];


let index = 0;


screen.innerHTML = `
<div class="terminal">

  <div id="typedText"></div>

  <button id="enterSystem" class="enter-system hidden">
    <span class="cursor">[ENTER SYSTEM]</span>
  </button>

</div>
`;



const typedText = document.querySelector("#typedText");
const enterSystem = document.querySelector("#enterSystem");

enterSystem.addEventListener("click", () => {
  console.log("ENTER SYSTEM");
});



function typeLine() {

  if(index >= lines.length){

    setTimeout(() => {
      enterSystem.classList.remove("hidden");
    },500);

    return;
  }


  const current = lines[index];


  const line = document.createElement("div");

  line.className = current.type;
  if (current.type === "system") {
    line.classList.add("text-center");
  }

  typedText.appendChild(line);


  // empty line
  if(current.text === "") {

    index++;

    setTimeout(typeLine,180);

    return;

  }


  let char = 0;


  const interval = setInterval(()=>{

    line.textContent += current.text[char];

    char++;


    if(char >= current.text.length){

      clearInterval(interval);

      index++;

      setTimeout(typeLine,180);

    }


  },45);

}


setTimeout(typeLine,1500);