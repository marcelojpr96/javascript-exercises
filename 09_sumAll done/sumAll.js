/**
 * @description
 * @author Marcelo
 * @date 10/12/2025
 * @param {number} first
 * @param {number} second
 */
const sumAll = function(first, second) {
    let base;
    let ceil;
    let returnvalue=0;
    if(!(Number.isInteger(first)&&Number.isInteger(second)) || !(first >=0 && second >= 0)){
        return "ERROR"
    }
    else{
        if(! (first===second)){
            console.log("they are diferent");
            base = first < second ? first : second;
            ceil = second > first ? second : first;
        }
        for(let i = base ; i <=ceil; i++){
            returnvalue += i;
            console.log(returnvalue);
        }
        return returnvalue;
    }
};

// Do not edit below this line
module.exports = sumAll;
