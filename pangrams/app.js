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
Task: Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

pangrams has the following parameter(s):

s: a string to test
*/
function pangrams(s) {
    let baseStr = s.toLowerCase()
    let testStr = "abcdefghijklmnopqrstuvwxyz".split('');
    let counter=0
    for (let i = 0; i < baseStr.length; i++){
        if (testStr.includes(baseStr[i])) {
            delete testStr[testStr.indexOf(baseStr[i])]
            counter++;
        }

    }
    return counter==26 ? "pangram" : "not pangram"

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = pangrams(s);

    ws.write(result + "\n");

    ws.end();
}
