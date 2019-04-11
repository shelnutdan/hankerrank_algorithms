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
Task:
Compare triplets must return an array of two integers, the first being Alice's score and the second being Bob's.

Return an array of two integers denoting the respective comparison points earned by Alice and Bob.
*/
function compareTriplets(a, b) {
    let pointsA = 0;
    let pointsB = 0;
    let resultArr=[]
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            pointsA += 1;
        } else if (a[i] < b[i]) {
            pointsB += 1;
        }
    }
    resultArr.push(pointsA);
    resultArr.push(pointsB);
    return resultArr

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
