const themeSwitch = document.querySelector("#theme-switch")

themeSwitch.addEventListener("click", () => {
    if (themeSwitch.checked) {
        storeTheme("dark")
    } else {
        storeTheme("light")
    }
})

function storeTheme(theme) {
    localStorage.setItem("theme", theme)
}

function setTheme() {
    const activeTheme = localStorage.getItem("theme")

    if (activeTheme === "light") {
        themeSwitch.checked = false
    } else {
        themeSwitch.checked = true
    }
}

setTheme()