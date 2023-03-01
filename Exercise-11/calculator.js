Calculator = {
    // Addition Function
    add : function(value1,value2) {
        return value1+value2;
    },

    // Subtraction Function
    sub : function(value1,value2) {
        return value1-value2;
    },

    // Multiplication Function
    mul : function(value1,value2) {
        return value1*value2;
    },

    // Division Function
    div : function(value1,value2) {
        return value1/value2;
    },
    validate : function(value1,value2) {
        return typeof(value1)==typeof(value2) && !isNaN(value1);
    },
    validationErrorMsg : "Enter proper values to perform arithmetic operation"
};

// Getting or Assigning Inputs
let value1 = 2;
let value2 = 5;

// Calling Arithmetic operations after validation
if(Calculator.validate(value1,value2))
    console.log(Calculator.add(value1,value2));
else
    console.log(Calculator.validationErrorMsg);

value1 = 'Ragnor';
if(Calculator.validate(value1,value2))
    console.log(Calculator.add(value1,value2));
else
    console.log(Calculator.validationErrorMsg);