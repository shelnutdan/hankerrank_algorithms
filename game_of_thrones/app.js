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

/*
Task: Complete the gameOfThrones function below to determine whether a given string can be rearranged into a palindrome. If it is possible, return YES, otherwise return NO.

gameOfThrones has the following parameter(s):

s: a string to analyze
*/
function gameOfThrones(s) {
    let uchars = {}
    s.replace(/\S/g, c => {
        uchars[c] = (isNaN(uchars[c]) ? 1 : uchars[c] + 1)
    })
    let count = 0
    for (let ch in uchars) {
        if (uchars[ch] % 2 !== 0) {
            count++
            if (count > 1) {
                return 'NO'
            }
        }
    }
    return 'YES'

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}
