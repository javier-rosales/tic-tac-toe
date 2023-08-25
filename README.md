# Tic Tac Toe

This project is part of [The Odin Project JavaScript Course](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript).

## What's the purpose of the project?

At this point, I have basic knowledge on HTML, CSS and JavaScript. The purpose of this project is to practice and apply all the knowledge I have right now on this technologies, but there's a specific topic I'd like to put in practice for the first time, which is [Factory functions and the Module Pattern](https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern).

## How are Factory Functions implemented?

In Tic Tac Toe, there's a gameboard where players select a symbol (usually `X` and `O`) and the game starts.

*Factory Functions* are simply functions that return an object with some properties and methods defined in the Factory Function. You can use a single Factory Function to create multiple objects.

On the other hand, the *Module Pattern* is supossed to be used when you only need one of something.

In the game, the Module Pattern can be used to create the gameboard, because there's only one, and for players, Factory Functions are a really good option, because all players share properties and methods, so they can be created with a Factory Function.

[Project details](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe).