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
Task: Complete the findMedian function in the editor below. It must return an integer that represents the median of the array.

findMedian has the following parameter(s):

arr: an unsorted array of integers
*/
function findMedian(arr) {
    arr.sort((a, b) => a - b)
    let mid = Math.floor(arr.length / 2)
    return arr.length%2!==0? arr[mid]:(arr[mid-1]+arr[mid])/2;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = findMedian(arr);

    ws.write(result + "\n");

    ws.end();
}
