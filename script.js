let str;

const decimalToRoman = (num) => {
    

    if(num === 2) {
        return "II";
    }

    if(num === 3) {
        return "III";
    }

    if(num === 4) {
        return "IV";
    }

    if(num === 5) {
        return "V";
    }

    if(num === 6) {
        return "VI";
    }

    if(num === 7) {
        return "VII";
    }

    if(num === 8) {
        return "VIII";
    }

    if(num === 9) {
        return "IX";
    }
    



}

console.log(decimalToRoman(0));
console.log(decimalToRoman(1));
console.log(decimalToRoman(2));
console.log(decimalToRoman(3));
console.log(decimalToRoman(4));
console.log(decimalToRoman(5));
console.log(decimalToRoman(6));
console.log(decimalToRoman(7));
console.log(decimalToRoman(8));
console.log(decimalToRoman(9));