const repeatString = function(string, num) {
    console.log("hi")
    if (num <0) {
        return"ERROR";
    }else if (num >0){
        let temp = string
        for(let i = 0; i<num-1 ; i++){
            string+=temp;

        }
        console.log(string*num)
        return string;
    }else{
        return ""
    }
};

// Do not edit below this line
module.exports = repeatString;
