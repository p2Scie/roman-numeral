const letterI = "I";
const letterV = "V";
const letterX = "X";

const letters = ["I", "V", "X", "L", "C", "D", "M"];

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

    if(num >= 11) {
        return letterX + letterI.repeat(num - 10); 
    }

}

for (let i = 1; i <= 3000; i++) {
    console.log(decimalToRoman(i));
}
