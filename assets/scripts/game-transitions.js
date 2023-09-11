const playerOne = document.querySelector("#player-one")
const playerTwo = document.querySelector("#player-two")
const players = document.querySelectorAll(".players > *")

const textInstruction = document.querySelector(".text.instruction")
const gameSettings = document.querySelector(".game-settings")
const gameboard = document.querySelector("#gameboard")
const gameReset = document.querySelector("#game-reset")

players.forEach(player => player.addEventListener("click", startGame))

function startGame() {
    textInstruction.classList.add("removed")
    gameSettings.classList.add("hidden")
    gameboard.classList.remove("hidden")
    gameReset.classList.remove("hidden")

    players.forEach(player => player.removeEventListener("click", startGame))
    gameReset.addEventListener("click", restartGame)
}

function restartGame() {
    textInstruction.classList.remove("removed")
    gameSettings.classList.remove("hidden")
    gameboard.classList.add("hidden")
    gameReset.classList.add("hidden")

    gameReset.removeEventListener("click", restartGame)
    players.forEach(player => player.addEventListener("click", startGame))
}