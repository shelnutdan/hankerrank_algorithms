'use strict';

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
Task: Complete the kaprekarNumbers function. Is should print the list of modifided Kaprekar numbers in the range of p and q.

Background: A modified Kaprekar number is a positive whole number with a special property. If you square it, then split the number into two integers and sum those integers, you have the same value you started with.

*/
function kaprekarNumbers(p, q) {
    let output = [];
    let square;
    for (let i = p; i <= q; i++){
        let splitArray = [];
        square = Math.pow(i,2);
        let squareString=square.toString()
        splitArray.push(squareString.substring(0, squareString.length-i.toString().length));
        splitArray.push(squareString.substring(squareString.length - i.toString().length))
        if ((parseInt(splitArray[0]||0) + parseInt(splitArray[1])) == i) {
            output.push(i)
        }
    }
    console.log(output.length ? output.join(" "):"INVALID RANGE");

}

function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}
