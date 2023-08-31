const gameReset = document.querySelector("#game-reset")
const gameSettings = document.querySelector(".game-settings")
const gameboard = document.querySelector("#gameboard")
const textInstruction = document.querySelector(".text.instruction")

gameReset.addEventListener("click", () => {
    textInstruction.classList.toggle("removed")
    gameSettings.classList.toggle("hidden")
    gameboard.classList.toggle("hidden")
})