const player1 = 'Leah'
const player2 = 'Lola'
let player1wins = 0
let player2wins = 0

const weapons = ['rock', 'paper', 'scissors'];

const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

while (player1wins < 3 && player2wins < 3) {
    const player1Weapon = weapons[parseInt(Math.random() * weapons.length) % 3];
    const player2Weapon = weapons[parseInt(Math.random() * weapons.length) % 3];

    console.log(player1, " plays", player1Weapon);
    console.log(player1, " plays", player1Weapon);


    if (player1Weapon === player2Weapon) {
        //Players Tied
        console.log("Tie");
    } else if (winConditions[player1Weapon] === player2Weapon) {
        //Player 1 wins
        console.log("Player 1 wins");
        player1wins++;
    } else {
        //Player 2 wins
        console.log("Player 2 wins");
        player2wins++;
    }
}

let winner;
if (player1wins === 3) {
    winner = player1;
} else {
    winner = player2;
}

console.log(winner, "wins the game!");