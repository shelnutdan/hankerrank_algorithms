'use strict';

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
Task: Calculate and print the factorial of a given integer
Inputs: a single interger n
Constraints: 1<=n<=100

*/
function extraLongFactorials(n) {
    const bigNumber = require('bignumber.js')
    let factoral=new bigNumber(1)

    if (n == 0) {
        factoral = 1;
    }
    for (let i = 1; i <= n; i++){
        factoral = factoral.mul(i);
    }
    console.log(factoral.toFixed())


}

function main() {
    const n = parseInt(readLine(), 10);

    extraLongFactorials(n);
}
