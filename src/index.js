module.exports = function reverse(n) {
    n = n + '';
    let reversedText = n.split('').reverse().join('');
    let reversedNumber = parseInt(reversedText, 10);
    console.log("reversed number: ", reversedNumber);
    return reversedNumber;
}