import { openProjectWindow } from "./windows/projectWindow.js";
import { openInfoWindow } from "./windows/infoWindow.js";
import { openConnectWindow } from "./windows/connectWindow.js";
import { openSkillsWindow } from "./windows/skillsWindow.js";
import { openCreditsWindow } from "./windows/creditsWindow.js";

export function createDesktop(apps, container) {
    container.innerHTML = "";

    const categoryOrder = ["GENERAL", "PROJECTS"];
    const groupedApps = apps.reduce((groups, app) => {
        const category = app.category ?? "GENERAL";
        if (!groups[category]) groups[category] = [];
        groups[category].push(app);
        return groups;
    }, {});

    const orderedCategories = [
        ...categoryOrder.filter((category) => groupedApps[category]?.length),
        ...Object.keys(groupedApps).filter((category) => !categoryOrder.includes(category)),
    ];

    orderedCategories.forEach((category) => {
    const section = document.createElement("div");
    section.className = "desktop-category";

    section.innerHTML = `
        <div class="desktop-category-label">[${category}]</div>
        <div class="desktop-category-icons"></div>
    `;

    const iconContainer = section.querySelector(".desktop-category-icons");

    groupedApps[category].forEach((app) => {
        const tile = document.createElement("button");
        tile.type = "button";
        tile.className = "desktop-tile";

        tile.innerHTML = `
            <div class="tile-icon">
                ${app.icon ? `<img src="${app.icon}" alt="${app.name}">` : "■"}
            </div>
            <div class="tile-name">${app.name}</div>
        `;

        tile.onclick = () => {
            try {
                if (app.window === "info") {
                    openInfoWindow(app);
                } else if (app.window === "connect") {
                    openConnectWindow();
                } else if (app.window === "skills") {
                    openSkillsWindow();
                } else if (app.window === "credits") {
                    openCreditsWindow(app);
                } else if (typeof app.action === "function") {
                    app.action();
                } else if (app.docFile) {
                    openProjectWindow(app);
                }
            } catch (err) {
                console.error(err);
            }
        };

        iconContainer.appendChild(tile);
    });

    container.appendChild(section);
});
}