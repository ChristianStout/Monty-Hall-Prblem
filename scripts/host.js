class Door {
    constructor(doorNumber, hasMoney, isOpen) {
        this.doorNumber = doorNumber;
        this.hasMoney = hasMoney; // Boolean value. Only one door will be true.
        this.isOpen = isOpen
    }
    get value() {
        return this.hasMoney;
    }
    set value(val) {
        this.hasMoney = val;
    }
    get open() {
        return this.isOpen;
    }
    set open(val) {
        this.isOpen = val;
    }
}

function generateDoors(number) {
    //This functiuon generates an array of doors with (number >= 3) doors
    //One door will have money, the rest have goats
    if (number < 3) return;
    let arrayOfDoors = [];
    let moneyDoor = Math.floor((Math.random() * number) + 1); //random door within [0-number]
    let currentDoor;

    for (i = 1; i <= number; i++) {
        currentDoor = new Door(i, isMoneyDoor(moneyDoor, i), false);
        arrayOfDoors.push(currentDoor)
    }
    return arrayOfDoors;
}

function hostOpensDoors(choice, arrayOfDoors) {
    // Based on the player's choice, the host opens all doors except the 
    // the player's choice and one other. The remaining two have only
    // money or a goat.
    newArrayOfDoors = []
    newArrayOfDoors.push(arrayOfDoors[choice - 1]);
    if (newArrayOfDoors[0].value === true) {
        newArrayOfDoors.push(arrayOfDoors[openDoorsPlayerChoseRight(choice, arrayOfDoors) - 1]);
        return newArrayOfDoors;
    }
    newArrayOfDoors.push(openDoorsPlayerChoseWrong(choice, arrayOfDoors));
    return newArrayOfDoors;
}

function openDoorsPlayerChoseRight(choice, arrayOfDoors) {
    let randomDoor = Math.floor((Math.random() * arrayOfDoors.length) + 1);
    if (randomDoor === choice) {
        randomDoor = openDoorsPlayerChoseRight(choice, arrayOfDoors);
    }
    return randomDoor; //returns Door NUMBER
}

function openDoorsPlayerChoseWrong(choice, arrayOfDoors) {
    let moneyDoor;
    for (i = 0; i <= arrayOfDoors.length; i++) {
        if (arrayOfDoors[i].value === true) {
            moneyDoor = arrayOfDoors[i];
            break;
        }
    }
    return moneyDoor; //returns Door OBJECT
}

function isMoneyDoor(moneyDoor, currentDoor) {
    return moneyDoor === currentDoor; //Return a boolean value
}
