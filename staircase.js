function staircase(n) {
    n = n - 1;
    for (let i = 0; i < n; i++) {
        let numbOfSpace = n - i - 1;
        let numOfHash = i + 1;
        let spaceString = '';
        let hashString = '';
        for (let j = 0; j < numbOfSpace; j++) {
            spaceString += ' ';
        }
        for (let k = 0; k < numOfHash; k++) {
            hashString += '#';
        }
        console.log(spaceString + hashString);
    }
}
staircase(4);    