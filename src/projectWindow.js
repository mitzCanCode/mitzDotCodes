import closeIconUrl from "./assets/icons/window-close.svg";

const projectWindow = document.createElement("div");
projectWindow.className = "window hidden";
projectWindow.innerHTML = `
  <div class="window-panel">
    <div class="window-header">
      <div class="window-title"></div>
      <button type="button" class="window-close" aria-label="Close window">
        <img class="window-close-icon" alt="" />
      </button>
    </div>
    <div class="window-meta">
      <div class="window-label">Techstack</div>
      <div class="techstack"></div>
    </div>
    <div class="window-content"></div>
    <div class="window-footer">
      <div class="window-links"></div>
      <label class="toggle-inline">
        <input type="checkbox" class="nerd-toggle" />
        <span class="toggle-switch"><span class="toggle-knob"></span></span>
        <span>For nerds</span>
      </label>
    </div>
  </div>
`;

const appendProjectWindow = () => {
  const container = document.querySelector(".window-container");

  if (container) {
    container.appendChild(projectWindow);
  }
};

appendProjectWindow();

const titleEl = projectWindow.querySelector(".window-title");
const closeButton = projectWindow.querySelector(".window-close");
// set icon src using import.meta.url so Vite resolves it correctly in build
const closeIconEl = projectWindow.querySelector(".window-close-icon");
closeIconEl.src = closeIconUrl;

const contentEl = projectWindow.querySelector(".window-content");
const techstackEl = projectWindow.querySelector(".techstack");
const toggleInput = projectWindow.querySelector(".nerd-toggle");
const screenContent = document.querySelector("#screenContent");

let currentProject = null;
let currentDoc = "";
let currentTechDoc = "";

closeButton.addEventListener("click", closeProjectWindow);
projectWindow.addEventListener("click", (event) => {
  if (event.target === projectWindow) closeProjectWindow();
});

toggleInput.addEventListener("change", renderProjectContent);

async function loadMarkdown(fileName) {
  if (!fileName) {
    return "";
  }

  try {
    const response = await fetch(new URL(`./assets/markdown/${fileName}`, import.meta.url));
    if (!response.ok) {
      return `## Unable to load ${fileName}`;
    }
    return await response.text();
  } catch (error) {
    return `## Unable to load ${fileName}`;
  }
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseMarkdown(raw) {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let html = "";
  let inList = false;
  let inCode = false;

  for (let line of lines) {
    if (line.trim().startsWith("```") || line.trim().startsWith("~~~")) {
      inCode = !inCode;
      html += inCode ? "<pre><code>" : "</code></pre>";
      continue;
    }

    if (inCode) {
      html += `${escapeHtml(line)}\n`;
      continue;
    }

    if (line.startsWith("# ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h1>${escapeHtml(line.slice(2))}</h1>`;
      continue;
    }

    if (line.startsWith("## ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h2>${escapeHtml(line.slice(3))}</h2>`;
      continue;
    }

    if (line.startsWith("### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h3>${escapeHtml(line.slice(4))}</h3>`;
      continue;
    }

    const listMatch = line.match(/^\s*[-*]\s+(.*)$/);
    if (listMatch) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${escapeHtml(listMatch[1])}</li>`;
      continue;
    }

    if (line.trim() === "") {
      if (inList) { html += "</ul>"; inList = false; }
      else { html += "<br>"; }
      continue;
    }

    html += `<p>${escapeHtml(line)}</p>`;
  }

  if (inList) html += "</ul>";
  if (inCode) html += "</code></pre>";
  return html;
}

function renderProjectContent() {
  if (!currentProject) return;

  const showNerd = toggleInput.checked;
  const markdown = showNerd && currentTechDoc ? currentTechDoc : currentDoc;
  contentEl.innerHTML = markdown ? parseMarkdown(markdown) : "<p>Document not available.</p>";
}

function renderTechstack(stack = []) {
  techstackEl.innerHTML = stack.length
    ? stack.map((item) => `
        <div class="tech-item">
          <img class="tech-icon" src="${item.icon}" alt="${item.name}">
          <span>${item.name}</span>
        </div>
      `).join("")
    : "<div class='tech-item'>No techstack defined</div>";
}

const linksEl = projectWindow.querySelector(".window-links");

function renderLinks(links = []) {
  linksEl.innerHTML = links.map((link) => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer">
      ${link.text}
    </a>
  `).join("");
}

export async function openProjectWindow(project) {
  currentProject = project;
  titleEl.textContent = project?.name || "";
  toggleInput.checked = false;
  renderTechstack(project?.techStack || []);
  renderLinks(project?.links || []);
  contentEl.innerHTML = "<p>Loading document...</p>";

  if (screenContent) screenContent.classList.add("blur");

  projectWindow.classList.remove("hidden");
  requestAnimationFrame(() => projectWindow.classList.add("visible"));

  currentDoc = await loadMarkdown(project?.docFile);
  currentTechDoc = await loadMarkdown(project?.technicalDocFile);
  renderProjectContent();
}

export function closeProjectWindow() {
  projectWindow.classList.remove("visible");
  if (screenContent) screenContent.classList.remove("blur");
  setTimeout(() => projectWindow.classList.add("hidden"), 250);
}

// expose helper on window to be usable from non-module click handlers
if (typeof window !== 'undefined') {
  window.openProjectWindowGlobal = openProjectWindow;
}
