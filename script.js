const letterI = "I";
const letterV = "V";
const letterX = "X";

const decimalToRoman = (num) => {


    if(num <= 3) {
        return letterI.repeat(num);
    }

  
    if(num >= 4) {
        if(num === 4) {
            return letterI + letterV;
        }

        if(num === 5) {
            return letterV;
        }

        if(num === 9) {
            return letterI + letterX;
        }

        if(num === 10) {
            return letterX;
        }
       
       
        return letterV + letterI.repeat(num - 5);
        
        
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
console.log(decimalToRoman(10));