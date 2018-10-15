//CCr={((l 40–age) x weight)/(72xSCr)}x 0.85 (if female)

function CalcClcr(type, sex, weight, age, ser_cr){
    if (type === "cogau"){
        let one = 140 - +age;
        let two = +one * +weight;
        let three = 72 * ser_cr;
        let four = +two / +three;
        let result;
        if (sex === "f"){
            let five = +four * 0.85;
            result = five;
        } else {
            result = four;
        }
        return result;
    } else if (type === "mdrd"){
        let one = Math.pow(ser_cr, -1.154);
        let two = Math.pow(age, -0.203);   
        let three = 175 * +one * +two;
        let result;
        if (sex === "f"){
            let four = +three * 0.742;
            result = four;
        } else {
            result = three;
        }
        return result;   
    } else if (type === "ckd"){
        let result;
        if (sex === "m"){
            if (ser_cr > 0.9){
                let one = ser_cr / 0.9;
                let two = Math.pow(one, -1.209);
                let three = Math.pow(0.993, age);
                let four = 141 * two * three; 
                result = four;          
            } else if (ser_cr <= 0.9){
                let one = ser_cr / 0.9;
                let two = Math.pow(one, -0.411);
                let three = Math.pow(0.993, age);
                let four = 141 * two * three;
                result = four;
            }
            return result;
        } else if (sex === "f"){
            if (ser_cr > 0.7){
                let one = ser_cr / 0.7;
                let two = Math.pow(one, -1.209);
                let three = Math.pow(0.993, age);
                let four = 144 * two * three; 
                result = four;          
            } else if (ser_cr <= 0.7){
                let one = ser_cr / 0.7;
                let two = Math.pow(one, -0.329);
                let three = Math.pow(0.993, age);
                let four = 144 * two * three;
                result = four;
            }
            return result;
        }
    }
}

let formula = CalcClcr("cogau", "m", 80, 45, 0.85);
console.log("CoGau M: " + formula);

formula = CalcClcr("cogau", "f", 80, 45, 0.85);
console.log("CoGau F: " + formula);

formula = CalcClcr("mdrd", "m", 80, 45, 0.85);
console.log("mdrd m: " + formula);

formula = CalcClcr("mdrd", "f", 80, 45, 0.85);
console.log("mdrd F: " + formula);

formula = CalcClcr("ckd", "m", 80, 45, 0.85);
console.log("ckd m : " + formula);

formula = CalcClcr("ckd", "f", 80, 45, 0.85);
console.log("ckd F: " + formula);