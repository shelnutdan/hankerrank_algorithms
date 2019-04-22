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
Task:Complete the checkMagazine function in the editor below. It must print Yes if the note can be formed using the magazine, or No.

checkMagazine has the following parameters:

magazine: an array of strings, each a word in the magazine
note: an array of strings, each a word in the ransom note
*/
function checkMagazine(magazine, note) {
    let counter = 0;


    for (let i = 0; i < note.length; i++){
        if (magazine.includes(note[i])) {
            counter++;
            delete magazine[magazine.indexOf(note[i])]
        }
    }
    console.log(counter == note.length?"Yes":"No")

}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
