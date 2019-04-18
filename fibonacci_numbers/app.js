function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
/*
Task: The Fibonacci number function must return the nth element in the Fibonacci Sequence fibonacci has the following parameter(s):

n: the integer index of the sequence to return

*/
function fibonacci(n) {
    if (n <= 1) {
     return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
 }


}
