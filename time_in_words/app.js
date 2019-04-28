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
Task: Complete the timeInWords function in the editor below. It should return a time string as described.

timeInWords has the following parameter(s):

h: an integer representing hour of the day
m: an integer representing minutes after the hour
*/
function timeInWords(h, m) {
    let minutes = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half']
    let hour = minutes[h];
    if (m == 0) {
        return `${hour} o' clock`
    } else if (m == 1) {
        return `${minutes[m]} minute past ${hour}`
    } else if (m > 1 && m <= 29 && m != 15) {
        return `${minutes[m]} minutes past ${hour}`
    } else if (m == 15) {
        return `quarter past ${hour}`
    } else if (m === 30) {
        return `half past ${hour}`
    } else if (m > 30 && m <= 58 && m != 45) {
        return `${minutes[60 - m]} minutes to ${minutes[h + 1]}`
    } else if (m == 45) {
        return `quarter to ${minutes[h + 1]}`
    } else {
        return `${minutes[60 - m]} minute to ${minutes[h + 1]}`
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}
