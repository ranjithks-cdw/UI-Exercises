Calculator = {
    // Addition Function
    add : function(value1,value2) {
        if(!Calculator.validate(value1,value2))
            return Calculator.validationErrorMsg;
        return value1+value2;
    },

    // Subtraction Function
    sub : function(value1,value2) {
        if(!Calculator.validate(value1,value2))
            return Calculator.validationErrorMsg;
        return value1-value2;
    },

    // Multiplication Function
    mul : function(value1,value2) {
        if(!Calculator.validate(value1,value2))
            return Calculator.validationErrorMsg;
        return value1*value2;
    },

    // Division Function
    div : function(value1,value2) {
        if(!Calculator.validate(value1,value2))
            return Calculator.validationErrorMsg;
        return value1/value2;
    },
    validate : function(value1,value2) {
        return typeof(value1)==typeof(value2) && typeof(value1)=="number";
    },
    validationErrorMsg : "Enter proper values to perform arithmetic operation"
};

// Calling Function
console.log(Calculator.add(1,2));
console.log(Calculator.sub(5,3));
console.log(Calculator.mul(7,2));
console.log(Calculator.div(7,19));
console.log(Calculator.add('1',2));
console.log(Calculator.div(2,0));