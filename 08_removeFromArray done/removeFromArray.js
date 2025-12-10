const removeFromArray = function(myarray, ...args) {
    console.log(myarray)
    console.log(args)
    if(args.length ===1){   
        while(myarray.includes(args[0])){
            myarray.splice(myarray.indexOf(args[0]),1);
            
        }
        return myarray
    }
    else{
        for(let arg of args){
            if(myarray.includes(arg)) {
                while(myarray.includes(arg)){
                    console.log(arg);
                    myarray.splice(myarray.indexOf(arg),1);
                }
            }
        }
        return myarray;
    }


};

// Do not edit below this line
module.exports = removeFromArray;
