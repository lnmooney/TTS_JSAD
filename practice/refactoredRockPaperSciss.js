// create array with possible weapons
const weapons = ['rock', 'paper', 'scissors'];

const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

function getHand() {
    // Math floor means it returns whatever the biggest int within the argument
    // It rounds a number DOWNWARDS to the nearest integer, and returns the result
    return weapons[Math.floor((Math.random) * weapons.length)];
}

// create obj for players with name and getHands properties
const player1 = {
    name: 'Leah',
    getHand: getHand,
    score: 0,
}

const player2 = {
    name: 'Jack',
    getHand: getHand,
    score: 0,
}

function playRound(playerOne, playerTwo) {
    // pass in the player to get hand function
    const playerOneWeapon = player1.getHand();
    // do the same for player two
    const playerTwoWeapon = player2.getHand();

    console.log(playerOne.name, " plays", playerOneWeapon);
    console.log(playerTwo.name, " plays", playerTwoWeapon);

    if (playerOneWeapon === playerTwoWeapon) {
        //Players Tied
        return null;
        // confused with how we're calleding winConditions
    } else if (winConditions[playerOneWeapon] === playerTwoWeapon) {
        //Player 1 wins
        return playerOne;
    } else {
        //Player 2 wins
        return playerTwo;
    }
}

function playGame(playerA, playerB, playUntil) {
    // play rounds until one player has won a certain amount of times over the other player
    while ( player1.score < playUntil && player2.score < playUntil) {
        playerRound(playerA, playerB);
    }
}
// SEE ANSWER ON REPO???? lines 44 and 47! See Jimmy's answer 

let winner;
if (player1wins === 3) {
    winner = player1;
} else {
    winner = player2;
}

console.log();