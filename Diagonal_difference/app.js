'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
Task: diagonalDifference function must return the absolute difference between the sums of its diagonals.
*/
function diagonalDifference(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    for (let i = 0; i < arr[0].length; i++){

        firstDiagonal += arr[i][i];
        secondDiagonal += arr[i][arr[0].length - i - 1]

    }

    //return arr[1][2]
    return Math.abs(secondDiagonal-firstDiagonal);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
