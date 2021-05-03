function playerSwitchStrat(arrayOfDoors) {
    // arrayOfDoors only has TWO DOORS at this point:
    //The door with money, and a door with a goat
    //In this function, the player switches to the other option
    return arrayOfDoors[1].value;
}

function playerRemainStrat(arrayOfDoors) {
    // arrayOfDoors only has TWO DOORS at this point:
    //The door with money, and a door with a goat
    //In this function, the player sticks with their original choice
    return arrayOfDoors[0].value;
}

function playerChoice(arrayOfDoors) {
    return Math.floor((Math.random() * arrayOfDoors.length) + 1);
}

function winAverageForStayStrat(numDoors, numRounds) {
    let doors;
    let choice;
    let newDoors;
    // stay strat
    let stayTotalWins = 0;
    var i;
    for (i = 0; i < numRounds; i++) {
        doors = generateDoors(numDoors);
        choice = playerChoice(doors);
        newDoors = hostOpensDoors(choice, doors);
        if (playerRemainStrat(newDoors) === true) {
            stayTotalWins += 1;
        }
    }
    return stayTotalWins;
}

function winAverageForSwitchStrat(numDoors, numRounds) {
    let doors;
    let choice;
    let newDoors;
    // switch strat
    let switchTotalWins = 0;
    var i;
    for (i = 0; i < numRounds; i++) {
        doors = generateDoors(numDoors);
        choice = playerChoice(doors);
        newDoors = hostOpensDoors(choice, doors);
       if (playerSwitchStrat(newDoors) === true) {
            switchTotalWins += 1;
        }
    }
    return switchTotalWins;
}