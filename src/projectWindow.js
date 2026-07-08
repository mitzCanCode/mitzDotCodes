const projectWindow = document.createElement("div");
projectWindow.className = "project-window hidden";
projectWindow.innerHTML = `
  <div class="project-window-panel">
    <div class="project-window-header">
      <div class="project-window-title"></div>
      <button type="button" class="ascii project-window-close" aria-label="Close window">X</button>
    </div>
    <div class="project-window-body">
      <div class="project-window-meta">
        <div class="project-window-label">Techstack</div>
        <div class="project-techstack"></div>
      </div>
      <div class="project-window-toggle">
        <label class="toggle-inline">
          <input type="checkbox" class="project-nerd-toggle" />
          <span>For nerds</span>
        </label>
      </div>
      <div class="project-window-content"></div>
    </div>
  </div>
`;

const appendProjectWindow = () => {
  if (document.body) {
    document.body.appendChild(projectWindow);
  } else {
    window.addEventListener("DOMContentLoaded", () => document.body.appendChild(projectWindow));
  }
};

appendProjectWindow();

const titleEl = projectWindow.querySelector(".project-window-title");
const closeButton = projectWindow.querySelector(".project-window-close");
const contentEl = projectWindow.querySelector(".project-window-content");
const techstackEl = projectWindow.querySelector(".project-techstack");
const toggleInput = projectWindow.querySelector(".project-nerd-toggle");

let currentProject = null;
let currentDoc = "";
let currentTechDoc = "";

closeButton.addEventListener("click", closeProjectWindow);
projectWindow.addEventListener("click", (event) => {
  if (event.target === projectWindow) {
    closeProjectWindow();
  }
});

toggleInput.addEventListener("change", renderProjectContent);

async function loadMarkdown(fileName) {
  if (!fileName) {
    return "";
  }

  try {
    const response = await fetch(new URL(`./assets/${fileName}`, import.meta.url));
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
    ? stack.map((item) => `<div class="tech-item">${item.icon} ${item.name}</div>`).join("")
    : "<div class='tech-item'>No techstack defined</div>";
}

export async function openProjectWindow(project) {
  currentProject = project;
  titleEl.textContent = project.name;
  toggleInput.checked = false;
  renderTechstack(project.techStack || []);
  contentEl.innerHTML = "<p>Loading document...</p>";
  projectWindow.classList.remove("hidden");

  currentDoc = await loadMarkdown(project.docFile);
  currentTechDoc = await loadMarkdown(project.technicalDocFile);
  renderProjectContent();
}

export function closeProjectWindow() {
  projectWindow.classList.add("hidden");
}
