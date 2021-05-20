const btn = document.querySelector("#theme-toggle");
// check to see if OS preferences for light or dark mode
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

// check to see if local storage has a theme preference
let currentTheme = localStorage.getItem("theme");

function setTheme() {
    //if no local storage check against system preferences
    if (currentTheme === null) {
        if (prefersDarkScheme.matches) {
            currentTheme = "dark"
        } else if (prefersLightScheme.matches) {
            currentTheme = "light"
        } else {
            // if no preferences, default to dark theme
            currentTheme = "dark"
        }
        setTheme()
    } else if (currentTheme === "dark") {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    } else if (currentTheme === "light") {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }
}

btn.addEventListener("click", function () {
    if (currentTheme === "dark") {
        currentTheme = "light"
        setTheme()
    } else {
        currentTheme = "dark";
        setTheme()
    }
    localStorage.setItem("theme", currentTheme);
});

setTheme()