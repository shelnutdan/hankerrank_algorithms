'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function sortNumber(a, b) {
    return a - b;
}
/*
Task: The Maximum toys fucntion should return an iteger representing the maximum number of toys that can be purchased give a limit of K.
*/
function maximumToys(prices, k) {

    prices.sort(sortNumber);

    for (let i = 0; i < prices.length; i++) {
        k -= prices[i];
        if (k < 0) {
            return i;
        };
    }
    return prices.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const prices = readLine().split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    let result = maximumToys(prices, k);

    ws.write(result + "\n");

    ws.end();
}
