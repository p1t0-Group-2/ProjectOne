// This Javascript file is used to handle the gameplay of the game.
// It is responsible for the game logic, such as the player's location selection, win conditions, etc.
// It is also responsible for the game's UI, such as updating the game board, displaying messages, etc.


let playerNumber = 1;

// Define the number of columns and rows in the game (allows for gameboard to be a dynamic size if wanted in the future)
const xColumns = 7; // 7 columns
const yRows = 6; // 6 rows
const straightForWin = 4; // 4 tokens in a row to win

// false represents an empty space, true represents a player's game piece
let gameBoard = clearGameBoard(xColumns, yRows);
console.log("gameBoard init")
consoleLogGameBoard();
// clearGameBoard();

// Create a 2D array to represent the game board of size xColumns by yRows
function clearGameBoard(xColumns, yRows) {
    let newArray = [];
    // Jonathan's Original Code
    // for (let newRow = 0; newRow < xColumns; newRow++) {
    //     newArray[newRow] = new Array(yRows);
    // }
    // for (let newColumn = 0; newColumn < xColumns; newColumn++) {
    //         for (let newRow = 0; newRow < yRows; newRow++) {
    //             newArray[newColumn][newRow] = 0;
    //         }
    // }

    // Max Ohsawa's Recommended Fix (much more elegant!)
    for (let x = 0; x < xColumns; x++){
        newArray.push([]);
        for (let y = 0; y < yRows; y++) {
            newArray[x].push(0)
        }
    }
    return newArray;
}

// Create a gameboard with a random number of tokens played
randomStart();
function randomStart() {
    let randomStartTokens = Math.floor(Math.random() * 12) + 1;
    console.log("Random start tokens", randomStartTokens);
    let playerNumber = 1;
    for (let randomToken = 0; randomToken < randomStartTokens; randomToken++) {
        let selectedColumn = Math.floor(Math.random() * xColumns);
        console.log("selectedColumn", selectedColumn);
        // let randomY = Math.floor(Math.random() * yRows);
        checkValidMove(selectedColumn);
    }
    console.log("Random start", gameBoard);
}

// Check if the selected location is valid (not full)
function checkValidMove(selectedColumn) {
    // console.log("Selected column", selectedColumn);
    let validMove = false;
    for (let rowNumber = 0; rowNumber < yRows; rowNumber++) {
        if (gameBoard[selectedColumn][rowNumber] === 0) {
            // Update the game board with the player's move (drop to the lowest Y-value in that X-value)
            validMove = true;
            gameBoard[selectedColumn][rowNumber] = playerNumber;
            console.log("Player", playerNumber, "placed token in: column", selectedColumn, "row", rowNumber);
            consoleLogGameBoard();
            dropToken(playerNumber,selectedColumn,rowNumber);
            checkForWin(selectedColumn, rowNumber);
            togglePlayer();
            break;
        }
    }
    if (!validMove) {
        // If the Y column is full, the player must select a different column
        console.log("Column is full, select a different column");

        // console.log([0, 0, 0,].join(' '))
    }
    // return validMove;

}   

function consoleLogGameBoard() {
    console.log(JSON.parse(JSON.stringify(gameBoard)));
}

// Check if the player has won the game
function checkForWin(selectedColumn, rowNumber) {
    // Check for horizonal win
    let horizontalString = gameBoard[selectedColumn].join('');

    // Check for vertical win
    let verticalString = gameBoard[rowNumber].join('');

    // Check for diagonal win (up right)


    // Check for diagonal win (up left)
}

// Flip to the alternate player
function togglePlayer() {
    if (playerNumber == 1) {
        playerNumber = 2;
    } else {
        playerNumber = 1;
    }
}


