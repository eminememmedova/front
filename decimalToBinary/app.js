// decimal to binary

convertDecimalToBinary(10);

function convertDecimalToBinary(number) {
   let binary = "";
   while (true) {
      binary += (number % 2).toString();
      number = Math.floor(number / 2);
      if (number == 1) {
         binary += 1;
         break;
      }
   }
   let result = revers(binary);
   console.log(result);
}

function revers(oldBinary) {
   reversBinary = "";
   for (let i = oldBinary.length - 1; i >= 0; i--) {
      reversBinary += oldBinary.charAt(i)
   }
   return reversBinary;
}