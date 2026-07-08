import { openProjectWindow } from "./projectWindow.js";

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
                <div class="tile-icon">${app.icon ?? "■"}</div>
                <div class="tile-name">${app.name}</div>
            `;

                tile.onclick = () => {
                    try {
                        console.log('desktop tile clicked for', app && app.name, 'has docFile?', !!app.docFile);
                        if (app.docFile) {
                            // prefer global wrapper to avoid module import timing issues
                            if (window && typeof window.openProjectWindowGlobal === 'function') {
                                window.openProjectWindowGlobal(app);
                            } else {
                                openProjectWindow(app);
                            }
                        } else if (typeof app.action === 'function') {
                            app.action();
                        }
                    } catch (err) {
                        console.error('desktop tile click failed', err);
                    }
                };

            section.appendChild(tile);
        });

        container.appendChild(section);
    });
}