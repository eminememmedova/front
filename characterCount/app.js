let text = "find the character of i"
let character = prompt("Enter the character: ")
let result = find(character);
alert ("character count: " + result)

function find(character) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i).toLowerCase() === character.toLowerCase()) {
            count += 1
        }
    }
    return count; 
}


