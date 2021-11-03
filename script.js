
const decimalToRoman = (num) => {
    if(num === 1) {
        return "I";
    }

    if(num === 2) {
        return "II";
    }

    if(num === 3) {
        return "III";
    }

    if(num === 4) {
        return "IV";
    }



}

console.log(decimalToRoman(0));
console.log(decimalToRoman(1));
console.log(decimalToRoman(2));
console.log(decimalToRoman(3));
console.log(decimalToRoman(4));