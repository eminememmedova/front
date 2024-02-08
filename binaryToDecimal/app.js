let binaryNumber = "1010";

function revers(oldBinary) {
    reversBinary = "";
    for (let i = oldBinary.length - 1; i >= 0; i--) {
       reversBinary += oldBinary.charAt(i)
    }
    return reversBinary;
 }

function convertDecimalToBinaryToDecimal(binaryNumber) {

    let number = 0;
    for (let i = revers(binaryNumber).length - 1; i >= 0; i--) {
        number += (revers(binaryNumber).charAt(i) * (2 ** i));
    }
    console.log(number);
    console.log(binaryNumber);
}

convertDecimalToBinaryToDecimal(binaryNumber);