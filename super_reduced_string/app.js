'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
Task: Complete the superReducedString function in the editor below. It should return the super reduced string or Empty String if the final string is empty.

superReducedString has the following parameter(s):

s: a string to reduce
*/
function superReducedString(s) {
    let strArray = s.split('');
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] === strArray[i + 1]) {
            strArray.splice(i, 2);
            return superReducedString(strArray.join(''))
        }
    }
    return s.length > 0 ? s : "Empty String";

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
