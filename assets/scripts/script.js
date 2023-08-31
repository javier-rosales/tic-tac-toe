const playerOne = document.querySelector("#player-one")
const playerTwo = document.querySelector("#player-two")

const gameReset = document.querySelector("#game-reset")
const gameSettings = document.querySelector(".game-settings")
const gameboard = document.querySelector("#gameboard")
const textInstruction = document.querySelector(".text.instruction")

playerOne.addEventListener("click", startGame)

gameReset.addEventListener("click", restartGame)

function startGame() {
    textInstruction.classList.add("removed")
    gameSettings.classList.add("hidden")
    gameboard.classList.remove("hidden")
    gameReset.classList.remove("hidden")

    playerOne.removeEventListener("click", startGame)
    gameReset.addEventListener("click", restartGame)
}

function restartGame() {
    textInstruction.classList.remove("removed")
    gameSettings.classList.remove("hidden")
    gameboard.classList.add("hidden")
    gameReset.classList.add("hidden")

    gameReset.removeEventListener("click", restartGame)
    playerOne.addEventListener("click", startGame)
}