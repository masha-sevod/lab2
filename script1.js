console.log("Задача №1");
let x = prompt("Введите число");
function absValue(x) { 
    if ( x >= 0) return x; 
    if ( x < 0) return -x;
}
console.log (x, "\n", absValue(x));

console.log("Задача №2");
let word = prompt("Введите слово");
function isPalindrome(word) {
    let reverse = "";
    for (let i = word.length-1; i >= 0; i--) {
        reverse += word[i];
    }
    if (word == reverse) {
        console.log("True");
    }
    else {
        console.log("False");
    }
}
console.log(word);
isPalindrome(word);

console.log("Задача №3");

function matrixAddition(matrix1, matrix2) {

}