const players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

// get the player named Mike
const playerNamedMike = players.find(function(revealArray){
	return revealArray.firstName === 'Mike';    
});

// get an array of all the players with RB position
const playerPositionRB = players.filter(function(revealArray){
    return revealArray.position === 'RB';
});

// get an array of the players last names
const playersLastNames = players.map(function(revealArray){
    return revealArray.lastName;
});

// get an array of the full names of all the running backs with more than 5 touchdowns
const playersMoreTouchdown = players.filter(function(revealArray){
    return revealArray.touchdowns > 5 && revealArray.position === 'RB';
}).map(function(revealArray){
    return revealArray.firstName + ' ' + revealArray.lastName;
});

// get the number of touchdowns by running backs
const playersTouchdownsByRBs = players.filter(function(revealArray){
    return revealArray.position === 'RB';
}).reduce(function(sum,current){
    // sum adds to current
    return sum + current.touchdowns;
    // the zero is the starting index!!! very important! almost always 0
}, 0);

console.log(playersTouchdownsByRBs);