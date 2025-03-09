document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar a");

    window.addEventListener("scroll", () => {
        let current = "";
        let maxVisibleSection = null;
        let maxVisibility = 0;

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            const visibleHeight =
                Math.min(windowHeight, sectionBottom) - Math.max(0, sectionTop);
            const visibility = Math.max(
                0,
                visibleHeight / section.offsetHeight
            );

            if (visibility > maxVisibility) {
                maxVisibility = visibility;
                maxVisibleSection = section;
            }
        });

        if (maxVisibleSection) {
            current = maxVisibleSection.getAttribute("id");
        }

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    const categoryButtons = document.querySelectorAll(".category-btn");
    const commandSearch = document.getElementById("commandSearch");

    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            categoryButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            const category = button.getAttribute("data-category");
            filterCommands(category, commandSearch.value);
        });
    });

    commandSearch.addEventListener("input", () => {
        const activeCategory = document.querySelector(".category-btn.active");
        const category = activeCategory
            ? activeCategory.getAttribute("data-category")
            : "all";
        filterCommands(category, commandSearch.value);
    });

    function filterCommands(category = "all", searchTerm = "") {
        const commands = document.querySelectorAll(".command-item");
        commands.forEach((command) => {
            const commandCategory = command.getAttribute("data-category");
            const commandText = command.textContent.toLowerCase();
            const matchesCategory =
                category === "all" || commandCategory === category;
            const matchesSearch =
                !searchTerm || commandText.includes(searchTerm.toLowerCase());
            command.style.display =
                matchesCategory && matchesSearch ? "block" : "none";
        });
    }

    filterCommands("all", "");
});
