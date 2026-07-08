import { openProjectWindow } from "./projectWindow.js";
import { openInfoWindow } from "./infoWindow.js";

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
        section.innerHTML = `<div class="desktop-category-label">[${category}]</div>`;

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
                    } 
                    else if (app.docFile) {
                        openProjectWindow(app);
                    }
                    else if (typeof app.action === "function") {
                        app.action();
                    }

                } catch (err) {
                    console.error(err);
                }
            };

            section.appendChild(tile);
        });

        container.appendChild(section);
    });
}